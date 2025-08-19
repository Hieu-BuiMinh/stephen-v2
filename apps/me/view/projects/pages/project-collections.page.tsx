import { ARTICLES, projectPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import PostCards from '@/components/post/post-cards'

function ProjectCollectionsPageView() {
	const postList = sortPostsByDate(projectPost, 'desc')

	return (
		<div className="w-full min-h-52 flex">
			{/* {postList?.length > 0 ? (
				<PostCards article={ARTICLES.projects} posts={postList} />
			) : (
				<TextEffect preset="slide" per="word" delay={0.5} className="mx-auto text-xl capitalize">
					I have no posts yet... ㄟ( ▔, ▔ )ㄏ
				</TextEffect>
			)} */}
		</div>
	)
}

export default ProjectCollectionsPageView
