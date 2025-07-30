import type { DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import { devPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { notFound } from 'next/navigation'

import MDXContentComponent from '@/components/mdx-content'
import PostLastUpdated from '@/components/post/post-last-updated'

interface PostPageProps {
	params: Promise<{ slug: DEV_POST_TYPE; id: string }>
}

export default async function PostDetailPageView({ params }: PostPageProps) {
	const { id } = await params
	const post = await getVelitePostById({ id, postsList: devPost })

	if (!post || !post.published) {
		notFound()
	}
	return (
		<>
			<div className="grid grid-cols-[1fr_250px] gap-10">
				<article className="prose prose-neutral prose-sm dark:prose-invert md:prose-base">
					<MDXContentComponent code={post.body} />
				</article>

				<div className="col-span-1">
					<div className="sticky top-24">Table of content...</div>
				</div>
			</div>

			<div className="pb-12">{post.updatedAt && <PostLastUpdated date={post.updatedAt} />}</div>
		</>
	)
}
