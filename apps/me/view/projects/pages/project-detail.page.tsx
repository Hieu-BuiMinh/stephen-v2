import { projectPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { TableOfContentDesktop } from '@repo/stephen-v2-ui/shadcn'
import { notFound } from 'next/navigation'

import MDXContentComponent from '@/components/mdx-content'
import CommentSection from '@/components/post/comment'
import PostDetailHeader from '@/components/post/post-detail-header'
import PostDetailGrid from '@/components/post/post-detail-grid'
import PostLastUpdated from '@/components/post/post-last-updated'
import PostLikeButtonContainer from '@/components/post/post-like-button-container'
import ProjectLink from '@/components/post/project-link'

interface PostPageProps {
	params: Promise<{ id: string }>
}

export default async function ProjectDetailPageView({ params }: PostPageProps) {
	const { id } = await params
	const post = await getVelitePostById({ id, postsList: projectPost })

	if (!post || !post.published) {
		notFound()
	}

	const hadToc = post.toc && post.toc.length > 0

	return (
		<>
			<PostDetailHeader post={post} />
			<div className="flex gap-3 pt-4 px-3">
				<ProjectLink title="Demo" url={post?.links?.demoUrl} />
				<ProjectLink title="Repo" url={post?.links?.repoUrl} />
			</div>
			<PostDetailGrid
				postId={post.id}
				hasSidebarContent={hadToc || Boolean(post.audio)}
				sidebar={<TableOfContentDesktop post={post} />}
			>
				<MDXContentComponent code={post.body} className="col-span-1 min-w-full" />
			</PostDetailGrid>

			<div className="pb-12 hidden md:block">{post.updatedAt && <PostLastUpdated date={post.updatedAt} />}</div>
			<div className="relative z-10 px-3 mt-5 lg:hidden">
				<PostLikeButtonContainer postId={post.id} />
			</div>
			<CommentSection postId={post.id} className="px-3 pb-24" />
		</>
	)
}
