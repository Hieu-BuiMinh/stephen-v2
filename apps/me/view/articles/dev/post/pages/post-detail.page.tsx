import type { DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import { devPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { notFound } from 'next/navigation'

import MDXContentComponent from '@/components/mdx-content'

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
			<div className="relative flex justify-between gap-10">
				<article className="prose w-full max-w-full dark:prose-invert lg:max-w-[calc(100%-260px)]">
					<MDXContentComponent code={post.body} />
				</article>
			</div>
		</>
	)
}
