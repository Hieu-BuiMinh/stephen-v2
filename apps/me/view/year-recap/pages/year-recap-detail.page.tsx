import type { TPost } from '@repo/stephen-v2-contents'
import { TableOfContentDesktop } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'

import MDXContentComponent from '@/components/mdx-content'
// import PostDetailHeader from '@/components/post/post-detail-header'
import PostLastUpdated from '@/components/post/post-last-updated'

function YearRecapDetail({ post }: { post: TPost }) {
	const hadToc = post.toc && post.toc.length > 0

	return (
		<>
			{/* <PostDetailHeader post={post} /> */}
			<div
				className={cn(
					`grid col-span-1 lg:grid-cols-[1fr_0px] gap-10 mt-5 px-3`,
					hadToc && 'lg:grid-cols-[1fr_250px]'
				)}
			>
				<MDXContentComponent code={post.body} className="col-span-1 min-w-full" />

				{hadToc && (
					<>
						<aside className="hidden lg:block lg:w-[250px]">
							<div className="sticky top-20 z-10 flex flex-col gap-4">
								<TableOfContentDesktop post={post} />
								{/* <PostLikeButton post={post} /> */}
							</div>
						</aside>
					</>
				)}
			</div>

			<div className="pb-12 hidden md:block">{post.updatedAt && <PostLastUpdated date={post.updatedAt} />}</div>
		</>
	)
}

export default YearRecapDetail
