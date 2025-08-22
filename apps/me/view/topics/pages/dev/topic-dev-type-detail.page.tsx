import type { ARTICLES, DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import { devPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { TableOfContentDesktop } from '@repo/stephen-v2-ui/shadcn'
import { notFound } from 'next/navigation'

import MDXContentComponent from '@/components/mdx-content'
import PostDetailHeader from '@/components/post/post-detail-header'
import PostLastUpdated from '@/components/post/post-last-updated'

interface PostPageProps {
	params: Promise<{ collection: keyof typeof ARTICLES; type: DEV_POST_TYPE; id: string }>
}

export default async function TopicDevTypeDetailPage({ params }: PostPageProps) {
	const { id } = await params
	const post = await getVelitePostById({ id, postsList: devPost })

	if (!post || !post.published) {
		notFound()
	}
	return (
		<>
			<PostDetailHeader post={post} />
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
		</>
	)
}
