'use client'

import { docPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { cn } from '@repo/stephen-v2-utils'
import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

type TocNode = {
	id?: string | null
	title?: string
	description?: string
	children?: TocNode[]
}

function TocTree({ nodes, docId, baseHref }: { nodes?: TocNode[]; docId: string; baseHref: string }) {
	if (!nodes?.length) return null

	return (
		<div className="flex flex-col text-xs gap-1 not-first:border-l not-first:border-dashed not-first:ml-3 not-first:pl-3">
			{nodes.map((n, idx) => {
				const key = `${n.id ?? 'group'}-${idx}-${n.title ?? ''}`

				const post = getVelitePostById({ postsList: docPost, id: n.id })

				if (n.id) {
					const href = `${baseHref}/${String(n.id)}`
					return (
						<div key={key} className="flex flex-col">
							<Link
								href={href}
								className={cn(
									'flex items-center gap-2 p-1.5 rounded-xs text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors truncate group',
									docId === String(n.id) && 'text-foreground underline bg-muted'
								)}
							>
								<span className="w-full truncate">{n.title || post?.title}</span>
								<LinkIcon className="shrink-0 hidden group-hover:block" size={12} />
							</Link>
							{!!n.children?.length && <TocTree nodes={n.children} docId={docId} baseHref={baseHref} />}
						</div>
					)
				}

				return (
					<div key={key} className="flex flex-col">
						<div className="p-1.5 text-muted-foreground">{n.title || post?.title}</div>
						{!!n.children?.length && <TocTree nodes={n.children} docId={docId} baseHref={baseHref} />}
					</div>
				)
			})}
		</div>
	)
}

function DocSidebarStatic({
	tableOfContent,
	docId,
	baseHref,
}: {
	tableOfContent: TocNode[]
	docId: string
	baseHref: string
}) {
	if (!tableOfContent?.length) return null

	return (
		<div className="w-70 h-[calc(100vh-4rem)] sticky top-16 border-r p-3 overflow-y-auto">
			<TocTree nodes={tableOfContent} docId={docId} baseHref={baseHref} />
		</div>
	)
}

export default DocSidebarStatic
