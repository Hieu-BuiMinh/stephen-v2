import { projectPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import { PostCard } from '@/components/post/post-card'

function ProjectCollectionsPageView() {
	const postList = sortPostsByDate(projectPost, 'desc')

	return (
		<div className="w-full min-h-52 flex">
			<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{postList?.length > 0 ? (
					postList.map((post) => {
						const url = `/projects/${post.id}`
						return <PostCard key={post.slug} post={post} url={url} />
					})
				) : (
					<TextEffect preset="slide" per="word" delay={0.5} className="mx-auto text-xl capitalize">
						I have no posts yet... ㄟ( ▔, ▔ )ㄏ
					</TextEffect>
				)}
			</div>
		</div>
	)
}

export default ProjectCollectionsPageView
