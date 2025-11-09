'use client'

import { cn } from '@repo/stephen-v2-utils'
import Link from 'next/link'

import { useDocDetailContext } from '@/components/layouts/doc/doc-detail-layout-provider'
import type { ITableOfContent } from '@/types/doc/doc-collection'

type TocNode = {
	id?: string | null
	title?: string
	description?: string
	children?: ITableOfContent[]
}

function TocTree({ nodes }: { nodes?: TocNode[] }) {
	const { collectionName, type, docId } = useDocDetailContext()

	if (!nodes?.length) return null

	return (
		<div className="flex flex-col text-xs gap-1 not-first:border-l not-first:border-dashed not-first:ml-3 not-first:pl-3">
			{nodes.map((n) => {
				const key = Math.random()
					.toString(36)
					.slice(2, 2 + 10)

				if (n.id) {
					return (
						<div key={key} className="flex flex-col">
							<Link
								href={`/doc/${collectionName}/${type}/${n.id}`}
								className={cn(
									'p-1.5 rounded-xs text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors',
									docId === n.id && 'text-foreground underline bg-muted'
								)}
							>
								{n.title}
							</Link>
							{n.children?.length && <TocTree nodes={n.children} />}
						</div>
					)
				}
				return (
					<div key={key} className="flex flex-col">
						<div className="p-1.5 text-muted-foreground">{n.title}</div>
						{n.children?.length && <TocTree nodes={n.children} />}
					</div>
				)
			})}
		</div>
	)
}

function DocSidebar() {
	const { tableOfContent } = useDocDetailContext()
	if (!tableOfContent) return null

	return (
		<div className="w-70 h-[calc(100vh-4rem)] sticky top-16 border-r border-dashed p-3 overflow-y-auto">
			<TocTree nodes={tableOfContent} />
		</div>
	)
}

export default DocSidebar
