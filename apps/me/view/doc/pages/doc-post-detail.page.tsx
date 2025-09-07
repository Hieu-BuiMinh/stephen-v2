import { docPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { TableOfContentDesktop } from '@repo/stephen-v2-ui/shadcn'
import { notFound } from 'next/navigation'

import MDXContentComponent from '@/components/mdx-content'
import DocDetailHeader from '@/components/post/doc-detail-header'
import PostLastUpdated from '@/components/post/post-last-updated'

async function DocumentPostDetailPageView({ id }: { id: string }) {
	const post = await getVelitePostById({ id, postsList: docPost })

	if (!post) {
		notFound()
	}

	return (
		<div className=" max-w-7xl m-auto">
			<DocDetailHeader post={post} />
			<div className="grid col-span-1 lg:grid-cols-[1fr_250px] gap-10 mt-5">
				<MDXContentComponent code={post.body} className="col-span-1 min-w-full" />

				<aside className="hidden lg:block lg:w-[250px]">
					<div className="sticky top-20 z-10 flex flex-col gap-4">
						<TableOfContentDesktop post={post} />
						{/* <PostLikeButton post={post} /> */}
					</div>
				</aside>
			</div>

			<div className="pb-12 hidden md:block">{post.updatedAt && <PostLastUpdated date={post.updatedAt} />}</div>
		</div>
	)
}

export default DocumentPostDetailPageView
