import type { DevBlogPost } from '@repo/stephen-v2-contents'

import { PostCard } from '@/components/post/post-card'

type PostCardsProps = {
	posts: DevBlogPost[]
}

const PostCards = ({ posts }: PostCardsProps) => {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20">
			{posts.map((post) => (
				<PostCard key={post.slug} post={post} />
			))}
		</div>
	)
}

export default PostCards
