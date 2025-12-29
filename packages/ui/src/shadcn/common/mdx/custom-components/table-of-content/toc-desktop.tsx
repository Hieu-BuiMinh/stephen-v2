'use client'

import { cn } from '@repo/stephen-v2-utils'
import { useScrollSpy } from '@repo/stephen-v2-utils/hooks'
import { Text } from 'lucide-react'
import Link from 'next/link'
import { useMemo } from 'react'

import { ScrollArea } from '../../../../../shadcn'

export type Header = {
	title: string
	url: string
	items?: Header[]
}

export type TTOC = {
	title: string
	url: string
	items: TTOC[]
}

function TableOfContentDesktop<T>({ post }: { post: T & { toc: TTOC[] } }) {
	const TOC = post.toc

	function extractUrls(Toc?: TTOC[]): string[] {
		const urls: string[] = []

		function traverse(items?: TTOC[]) {
			items?.forEach((item) => {
				urls.push(item.url.slice(1)) // remove the "#" from the URL
				if (item.items && item.items.length > 0) {
					traverse(item.items)
				}
			})
		}

		traverse(Toc)
		return urls
	}

	const activeId = useScrollSpy(extractUrls(TOC), { rootMargin: '0% 0% -80% 0%' })

	const flatTocArray = useMemo(() => {
		const flat: { url: string; title: string; level: number }[] = []
		const flatten = (headers: Header[], level: number = 0) => {
			headers?.forEach((header) => {
				flat.push({ url: header.url, title: header.title, level })
				if (header.items && header.items.length > 0) {
					flatten(header.items, level + 1)
				}
			})
		}
		flatten(TOC)
		return flat
	}, [TOC])

	if (flatTocArray.length === 0) {
		return <p className="text-muted-foreground">No table of contents available.</p>
	}

	return (
		<nav aria-label="Table of Contents" className="relative flex-col gap-3">
			<p className="flex gap-1 items-center text-xs font-bold text-muted-foreground">
				<Text size={20} />
				On this page
			</p>

			<ScrollArea className="flex max-h-[calc(100vh-20rem)] flex-col overflow-auto pt-3">
				{flatTocArray.map((toc, index) => (
					<div
						key={`${toc.title}-${index}`}
						className={cn(`pt-5 first:pt-0`)}
						style={{ paddingLeft: toc.level * 10 }}
					>
						<Link
							className={cn(
								'line-clamp-1 text-xs leading-[1.2] text-muted-foreground no-underline transition-colors hover:text-foreground',
								toc.url.slice(1) === activeId && 'font-semibold text-foreground underline'
							)}
							href={toc.url}
						>
							{toc.title}
						</Link>
					</div>
				))}
			</ScrollArea>
		</nav>
	)
}

export { TableOfContentDesktop }
