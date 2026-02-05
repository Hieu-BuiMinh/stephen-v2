import type { ARTICLES, BOOKS_POST_TYPE, DEV_POST_TYPE, OTHERS_POST_TYPE } from '@repo/stephen-v2-contents'
import { devPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { TableOfContentDesktop } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { notFound } from 'next/navigation'

import MDXContentComponent from '@/components/mdx-content'
import PostDetailHeader from '@/components/post/post-detail-header'
import PostLastUpdated from '@/components/post/post-last-updated'

type TType = DEV_POST_TYPE | BOOKS_POST_TYPE | OTHERS_POST_TYPE
interface PostPageProps {
	params: { collection: keyof typeof ARTICLES; type: TType; id: string }
}

export default async function TopicDevTypeDetailPage({ params }: PostPageProps) {
	const { id } = await params
	const post = await getVelitePostById({ id, postsList: devPost })

	if (!post || !post.published) {
		notFound()
	}

	const hadToc = post.toc && post.toc.length > 0

	return (
		<>
			<PostDetailHeader post={post} />
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

						<svg
							aria-hidden="true"
							className="pointer-events-none absolute inset-0 -top-12 [z-index:9] size-full fill-blue-500/50 stroke-blue-500/50 [mask-image:linear-gradient(to_bottom,_#ffffffad,_transparent)] max-h-[500px] pt-4 opacity-20 dark:opacity-20"
						>
							<defs>
								<pattern id=":S2:" width="5" height="5" patternUnits="userSpaceOnUse" x="-1" y="-1">
									<path d="M.5 5V.5H5" fill="none" strokeDasharray="0"></path>
								</pattern>
							</defs>
							<rect width="100%" height="100%" strokeWidth="0" fill="url(#:S2:)"></rect>
						</svg>
					</>
				)}
			</div>

			<div className="pb-12 hidden md:block">{post.updatedAt && <PostLastUpdated date={post.updatedAt} />}</div>
		</>
	)
}
