import type { ARTICLES, BOOKS_POST_TYPE, DEV_POST_TYPE, OTHERS_POST_TYPE } from '@repo/stephen-v2-contents'
import { bookRecap } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { RetroMusicPlayer, TableOfContentDesktop } from '@repo/stephen-v2-ui/shadcn'
import { notFound } from 'next/navigation'

import MDXContentComponent from '@/components/mdx-content'
import CommentSection from '@/components/post/comment'
import PostDetailGrid from '@/components/post/post-detail-grid'
import PostDetailHeader from '@/components/post/post-detail-header'
import PostLastUpdated from '@/components/post/post-last-updated'
import PostLikeButtonContainer from '@/components/post/post-like-button-container'

type TType = DEV_POST_TYPE | BOOKS_POST_TYPE | OTHERS_POST_TYPE
interface IBookTypeDetailProps {
	params: { collection: keyof typeof ARTICLES; type: TType; id: string }
}

async function TopicBookTypeDetailPage({ params }: IBookTypeDetailProps) {
	const { id } = await params
	const post = await getVelitePostById({ id, postsList: bookRecap })

	if (!post || !post.published) {
		notFound()
	}

	const hadToc = post.toc && post.toc.length > 0

	return (
		<>
			<PostDetailHeader post={post} />
			{post.audio && (
				<div className="relative z-10 mt-5 px-3 lg:hidden">
					<RetroMusicPlayer source={post.audio} cover={post.cover} />
				</div>
			)}
			<PostDetailGrid
				postId={post.id}
				hasSidebarContent={hadToc || Boolean(post.audio)}
				sidebar={<TableOfContentDesktop post={post} />}
			>
				<MDXContentComponent key="content" code={post.body} className="col-span-1 min-w-full" />
				{(hadToc || post.audio) && (
					<svg
						key="background"
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
				)}
			</PostDetailGrid>

			<div className="pb-12 hidden md:block">{post.updatedAt && <PostLastUpdated date={post.updatedAt} />}</div>
			<div className="relative z-10 px-3 mt-5 lg:hidden">
				<PostLikeButtonContainer postId={post.id} />
			</div>
			<CommentSection postId={post.id} className="px-3 pb-24" />
		</>
	)
}

export default TopicBookTypeDetailPage
