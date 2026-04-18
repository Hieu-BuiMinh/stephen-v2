'use client'

import { cn } from '@repo/stephen-v2-utils'
import { useScrollSpy } from '@repo/stephen-v2-utils/hooks'
import { Text } from 'lucide-react'
import Link from 'next/link'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'

import { ScrollArea } from '../../../../../shadcn'

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

function TableOfContentDesktop<T>({ post }: { post: TTocExtend<T> }) {
	const containerRef = useRef<HTMLDivElement>(null)

	const [svgPath, setSvgPath] = useState('')
	const [activeRect, setActiveRect] = useState<{ top: number; height: number } | null>(null)
	const [containerHeight, setContainerHeight] = useState(0)

	const tocItems = post.toc ?? []
	const urls = useMemo(() => extractUrls(tocItems), [tocItems])
	const activeId = useScrollSpy(urls, { rootMargin: '0% 0% -80% 0%' })
	const flatTocArray = useMemo(() => flattenToc(tocItems), [tocItems])

	useLayoutEffect(() => {
		const container = containerRef.current
		if (!container) return

		const updatePath = () => {
			const items = container.querySelectorAll('.toc-item')
			let path = ''
			let currentActiveRect = null

			items.forEach((item, index) => {
				const element = item as HTMLElement
				const data = flatTocArray[index]
				if (!data) return

				const level = data.level
				const x = level * 6 + 4
				const yOffset = element.offsetTop
				const height = element.offsetHeight

				if (index === 0) {
					path += `M ${x} ${yOffset} L ${x} ${yOffset + height}`
				} else {
					const prevElement = items[index - 1] as HTMLElement
					const prevData = flatTocArray[index - 1]
					if (!prevElement || !prevData) return

					const prevLevel = prevData.level
					const prevX = prevLevel * 6 + 4
					const prevYEnd = prevElement.offsetTop + prevElement.offsetHeight

					/**
					 * Standard Smooth S-curve (Rounder):
					 * Using a 0.4 ratio to create a "fuller" and rounder S-curve.
					 */
					const gap = yOffset - prevYEnd
					path += ` C ${prevX} ${prevYEnd + gap * 0.4} ${x} ${yOffset - gap * 0.4} ${x} ${yOffset}`
					path += ` L ${x} ${yOffset + height}`
				}

				if (data.url.slice(1) === activeId) {
					currentActiveRect = { top: yOffset, height }
				}
			})

			setSvgPath(path)
			setActiveRect(currentActiveRect)
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
	}, [flatTocArray, activeId])

	// Optimization: Pre-encode the SVG mask for the moving highlight
	const svgMaskUrl = useMemo(() => {
		if (!svgPath) return ''
		const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 ${containerHeight || 1000}"><path d="${svgPath}" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`
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

					{flatTocArray.map((toc, index) => (
						<div
							key={`${toc.title}-${index}`}
							className={cn('toc-item relative z-10 py-1.5 transition-colors')}
							style={{ paddingLeft: toc.level * 6 + 16 }}
						>
							<Link
								className={cn(
									'line-clamp-2 text-[11px] leading-[1.3] text-muted-foreground no-underline transition-colors hover:text-foreground',
									toc.url.slice(1) === activeId && 'font-medium text-foreground'
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
