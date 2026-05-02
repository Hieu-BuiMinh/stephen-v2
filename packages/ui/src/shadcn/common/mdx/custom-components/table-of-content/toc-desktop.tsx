/**
 * TableOfContentDesktop
 * A premium TOC component with fluid S-curve geometry and dynamic scroll tracking.
 * Inspired by Fumadocs Clerk TOC:
 * https://github.com/fuma-nama/fumadocs/blob/755554d6acbb22efcdedf31d40b1a83f54e2cf1a/packages/ui/src/components/layout/toc-clerk.tsx
 * https://www.fuma-nama.dev/blog/svg-art
 */
'use client'

import { cn } from '@repo/stephen-v2-utils'
import { useScrollSpy } from '@repo/stephen-v2-utils/hooks'
import { ScrollArea } from '@ui/shadcn'
import { Text } from 'lucide-react'
import Link from 'next/link'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'

interface TocItem {
	title: string
	url: string
	items: TocItem[]
}

type TTocExtend<T> = T & {
	toc?: TocItem[]
}

/**
 * Utility to extract all URLs from TocItem tree
 */
function extractUrls(toc: TocItem[]): string[] {
	const urls: string[] = []
	const traverse = (items: TocItem[] = []) => {
		items.forEach((item) => {
			if (item.url) {
				urls.push(item.url.slice(1))
			}
			if (item.items && item.items.length > 0) {
				traverse(item.items)
			}
		})
	}
	traverse(toc)
	return urls
}

/**
 * Utility to flatten TocItem tree into a flat array with levels
 */
function flattenToc(toc: TocItem[]): { url: string; title: string; level: number }[] {
	const flat: { url: string; title: string; level: number }[] = []
	const flatten = (items: TocItem[], level: number = 0) => {
		items.forEach((item) => {
			flat.push({ url: item.url, title: item.title, level })
			if (item.items && item.items.length > 0) {
				flatten(item.items, level + 1)
			}
		})
	}
	flatten(toc)
	return flat
}

/**
 * Binary search to find the distance along a path for a given Y coordinate
 */
function findDistanceAtY(pathEl: SVGPathElement, targetY: number): number {
	try {
		const totalLength = pathEl.getTotalLength()
		let low = 0
		let high = totalLength
		// 15 iterations provide sub-pixel precision for typical TOC heights
		for (let i = 0; i < 15; i++) {
			const mid = (low + high) / 2
			const p = pathEl.getPointAtLength(mid)
			if (p.y < targetY) low = mid
			else high = mid
		}
		return (low + high) / 2
	} catch (e) {
		return 0
	}
}

function TableOfContentDesktop<T>({ post }: { post: TTocExtend<T> }) {
	const containerRef = useRef<HTMLDivElement>(null)

	const [svgPath, setSvgPath] = useState('')
	const [activeRect, setActiveRect] = useState<{ top: number; height: number; x: number } | null>(null)
	const [containerHeight, setContainerHeight] = useState(0)
	const [direction, setDirection] = useState<'up' | 'down'>('down')
	const [dotDistance, setDotDistance] = useState(0)
	const prevActiveIdRef = useRef<string | null>(null)
	const pathRef = useRef<SVGPathElement>(null)

	const tocItems = post.toc ?? []
	const urls = useMemo(() => extractUrls(tocItems), [tocItems])
	const activeIds = useScrollSpy(urls, { rootMargin: '0% 0% -30% 0%' })
	const flatTocArray = useMemo(() => flattenToc(tocItems), [tocItems])

	useLayoutEffect(() => {
		const currentActiveId = direction === 'down' ? activeIds[activeIds.length - 1] : activeIds[0]

		if (currentActiveId) {
			prevActiveIdRef.current = currentActiveId
		}
	}, [activeIds, direction])

	// Detect scroll direction changes at 1px sensitivity
	useLayoutEffect(() => {
		let lastScrollY = window.scrollY
		let currentDirection = direction

		const updateDirection = () => {
			const scrollY = window.scrollY
			const newDirection = scrollY > lastScrollY ? 'down' : 'up'

			if (newDirection !== currentDirection) {
				currentDirection = newDirection
				setDirection(newDirection)
			}

			lastScrollY = scrollY
		}

		window.addEventListener('scroll', updateDirection, { passive: true })
		return () => window.removeEventListener('scroll', updateDirection)
	}, [direction])

	// NEW: Separate effect for calculating the highlight rect based on activeIds
	useLayoutEffect(() => {
		const container = containerRef.current
		if (!container || activeIds.length === 0) {
			setActiveRect(null)
			return
		}

		const items = container.querySelectorAll('.toc-item')
		let minTop = Infinity
		let maxBottom = -Infinity
		let activeX = 0

		items.forEach((item, index) => {
			const element = item as HTMLElement
			const data = flatTocArray[index]
			if (!data) return

			if (activeIds.includes(data.url.slice(1))) {
				const styles = getComputedStyle(element)
				const paddingTop = parseFloat(styles.paddingTop)
				const paddingBottom = parseFloat(styles.paddingBottom)

				const top = element.offsetTop + paddingTop
				const bottom = element.offsetTop + element.offsetHeight - paddingBottom
				const x = data.level * 8 + 4

				minTop = Math.min(minTop, top)
				maxBottom = Math.max(maxBottom, bottom)

				if (direction === 'down') {
					if (bottom === maxBottom) activeX = x
				} else {
					if (top === minTop) activeX = x
				}
			}
		})

		if (minTop !== Infinity) {
			setActiveRect({
				top: minTop,
				height: maxBottom - minTop,
				x: activeX,
			})
		}
	}, [activeIds, flatTocArray, direction])

	useLayoutEffect(() => {
		if (!pathRef.current || !activeRect) return
		const targetY = direction === 'down' ? activeRect.top + activeRect.height : activeRect.top
		setDotDistance(findDistanceAtY(pathRef.current, targetY))
	}, [activeRect, direction])

	// Effect for calculating the STATIC track path
	useLayoutEffect(() => {
		const container = containerRef.current
		if (!container) return

		const updatePath = () => {
			const items = container.querySelectorAll('.toc-item')
			let path = ''

			items.forEach((item, index) => {
				const element = item as HTMLElement
				const data = flatTocArray[index]
				if (!data) return

				const styles = getComputedStyle(element)
				const paddingTop = parseFloat(styles.paddingTop)
				const paddingBottom = parseFloat(styles.paddingBottom)

				const x = data.level * 8 + 4
				const top = element.offsetTop + paddingTop
				const bottom = element.offsetTop + element.offsetHeight - paddingBottom

				if (index === 0) {
					path += `M ${x} ${top} L ${x} ${bottom}`
				} else {
					const prevElement = items[index - 1] as HTMLElement
					const prevData = flatTocArray[index - 1]
					if (!prevElement || !prevData) return

					const prevStyles = getComputedStyle(prevElement)
					const prevPaddingBottom = parseFloat(prevStyles.paddingBottom)
					const prevYEnd = prevElement.offsetTop + prevElement.offsetHeight - prevPaddingBottom
					const prevX = prevData.level * 8 + 4

					/**
					 * Fuma-inspired Curved Connection:
					 * We use a balanced Cubic Bezier to connect the end of previous item
					 * to the start of current item.
					 */
					if (prevX === x) {
						path += ` L ${x} ${top}`
					} else {
						const gap = top - prevYEnd
						const radius = Math.min(4, gap / 2)
						path += ` C ${prevX} ${prevYEnd + radius} ${x} ${top - radius} ${x} ${top}`
					}
					path += ` L ${x} ${bottom}`
				}
			})

			setSvgPath(path)
			setContainerHeight(container.offsetHeight)
		}

		updatePath()

		const observer = new ResizeObserver(() => {
			updatePath()
		})
		observer.observe(container)

		window.addEventListener('resize', updatePath)
		return () => {
			observer.disconnect()
			window.removeEventListener('resize', updatePath)
		}
	}, [flatTocArray])

	// Optimization: Pre-encode the SVG mask for the moving highlight
	const svgMaskUrl = useMemo(() => {
		if (!svgPath) return ''
		// stroke="white" is essential for SVG masks
		const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 ${containerHeight || 1000}"><path d="${svgPath}" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`
		return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
	}, [svgPath, containerHeight])

	if (flatTocArray.length === 0) {
		return null
	}

	return (
		<nav aria-label="Table of Contents" className="relative flex flex-col gap-3">
			<p className="flex gap-1 items-center px-1 text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-80">
				<Text size={14} />
				On this page
			</p>

			<ScrollArea className="flex max-h-[calc(100vh-15rem)] flex-col overflow-auto pt-4 pr-4">
				<div ref={containerRef} className="relative flex flex-col">
					{/* Static Track Background */}
					<svg
						className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible"
						aria-hidden="true"
					>
						<path
							ref={pathRef}
							d={svgPath}
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-muted-foreground/15"
						/>
					</svg>

					{/* Masked Highlight Layer (Fuma Technique) */}
					<div
						className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible"
						style={{
							maskImage: svgMaskUrl,
							WebkitMaskImage: svgMaskUrl,
							maskRepeat: 'no-repeat',
							WebkitMaskRepeat: 'no-repeat',
						}}
					>
						{activeRect && (
							<div
								className="absolute w-12 bg-foreground transition-all duration-500 ease-in-out"
								style={{
									top: activeRect.top,
									height: activeRect.height,
									left: 0,
									// Multi-stop gradient for the "rounded" soft ends
									background:
										'linear-gradient(to bottom, transparent, currentColor 20%, currentColor 80%, transparent)',
								}}
							/>
						)}
					</div>

					{/* Leading Dot */}
					{activeRect && svgPath && (
						<div
							className="absolute z-20 h-1 w-1 rounded-full bg-foreground transition-all duration-500 ease-in-out"
							style={{
								offsetPath: `path('${svgPath}')`,
								offsetDistance: `${dotDistance}px`,
								offsetRotate: '0deg',
							}}
						/>
					)}

					{flatTocArray.map((toc, index) => (
						<div
							key={`${toc.title}-${index}`}
							className={cn('toc-item relative z-10 py-1.5 transition-colors')}
							style={{ paddingLeft: toc.level * 6 + 16 }}
						>
							<Link
								className={cn(
									'line-clamp-2 text-[11px] leading-[1.3] text-muted-foreground no-underline transition-colors hover:text-foreground',
									activeIds.includes(toc.url.slice(1)) && 'font-medium text-foreground'
								)}
								href={toc.url}
							>
								{toc.title}
							</Link>
						</div>
					))}
				</div>
			</ScrollArea>
		</nav>
	)
}

export { TableOfContentDesktop }
