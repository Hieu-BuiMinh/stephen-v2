import type { TPost } from '@repo/stephen-v2-contents'
import { TableOfContentDesktop } from '@repo/stephen-v2-ui/shadcn'

import MDXContentComponent from '@/components/mdx-content'
import PostDetailHeader from '@/components/post/post-detail-header'
import PostLastUpdated from '@/components/post/post-last-updated'

function YearRecapDetail({ post }: { post: TPost }) {
	const hadToc = post.toc

	return (
		<>
			<PostDetailHeader post={post} />
			<div className={`grid col-span-1 lg:grid-cols-[1fr_${hadToc ? 250 : 0}px] gap-10 mt-5 px-3`}>
				<MDXContentComponent code={post.body} className="col-span-1 min-w-full" />

				{hadToc && (
					<>
						<aside className="hidden lg:block lg:w-[250px]">
							<div className="sticky top-20 z-10 flex flex-col gap-4">
								{/* <TableOfContentDesktop<TPost> post={post} />? */}
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
