'use client'

import { docPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { ScrollArea } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { motion } from 'motion/react'
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
						<div key={key} className="relative flex flex-col">
							<Link
								href={href}
								className={cn(
									'relative flex items-center gap-2 p-1.5 rounded-xs text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors group min-w-0',
									docId === String(n.id) && 'text-foreground font-medium'
								)}
							>
								{docId === String(n.id) && (
									<motion.div
										layoutId="sidebar-active-bg"
										className="absolute inset-0 bg-muted rounded-xs -z-10"
										transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
									/>
								)}
								<span className="flex-1 line-clamp-1 min-w-0">{n.title || post?.title}</span>
								<LinkIcon className="shrink-0 hidden group-hover:block" size={12} />
							</Link>
							{!!n.children?.length && <TocTree nodes={n.children} docId={docId} baseHref={baseHref} />}
						</div>
					)
				}

				return (
					<div key={key} className="flex flex-col">
						<div className="p-1.5 text-muted-foreground min-w-0">
							<p className="line-clamp-1 pr-1.5 min-w-0">{n.title || post?.title}</p>
						</div>
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
		<div className="w-70 h-[calc(100vh-4rem)] sticky top-16 border-r pr-2 pt-2  overflow-y-auto">
			<ScrollArea className="h-full">
				<TocTree nodes={tableOfContent} docId={docId} baseHref={baseHref} />
			</ScrollArea>
		</div>
	)
}

export default DocSidebarStatic
