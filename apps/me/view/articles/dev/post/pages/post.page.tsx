import type { ARTICLES, DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import { devPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'

import PostCards from '@/components/post/post-cards'

const sortedPostsBySlug = ({ article, slug }: { slug: DEV_POST_TYPE; article: keyof typeof ARTICLES }) => {
	let postCollection = []

	switch (article) {
		case 'dev':
			postCollection = devPost
			break

		default:
			postCollection = []
			break
	}

	const posts = postCollection?.filter((post) => post?.type?.toLocaleLowerCase() === slug)

	return sortPostsByDate(posts, 'desc')
}

function PostPageView({ article, slug }: { slug: DEV_POST_TYPE; article: keyof typeof ARTICLES }) {
	const postList = sortedPostsBySlug({ article, slug })

	return (
		<div className="w-full min-h-52 flex">
			{postList?.length > 0 ? (
				<PostCards posts={postList} />
			) : (
				<span className="mx-auto">I have no posts yet... ㄟ( ▔, ▔ )ㄏ</span>
			)}
		</div>
	)
}

export default PostPageView
