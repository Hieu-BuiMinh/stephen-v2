import type { TPost } from '@repo/stephen-v2-contents'
import { d } from '@repo/stephen-v2-utils'
import Link from 'next/link'

import MDXContentComponent from '@/components/mdx-content'

function RetroPostItem({ post }: { post: TPost }) {
	return (
		<div id={`post-${post.id}`} className="flex flex-col gap-3 md:pl-3 scroll-mt-24">
			<div className="flex flex-col gap-3">
				<p className="text-xs text-muted-foreground">{d(post.milestone).format('MMM D, YYYY')}</p>
				<Link href={`#post-${post.id}`} className="text-base font-bold sm:text-base md:text-xl">
					{post.title}
				</Link>
				<p className="text-xs font-light text-muted-foreground md:text-base">{post.description}</p>
			</div>

			<div className="w-full border-t border-dashed border-muted-foreground/50" />

			<MDXContentComponent code={post.body} className="col-span-1 min-w-full" />
		</div>
	)
}

export default RetroPostItem
