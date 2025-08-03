import type { BOOKS_POST_TYPE, DEV_POST_TYPE, TPost } from '@repo/stephen-v2-contents'

import { PostCard } from '@/components/post/post-card'
import { ShortCard } from '@/components/post/short-card'

type PostCardsProps = {
	posts: TPost[]
	slug: DEV_POST_TYPE | BOOKS_POST_TYPE
}

const PostCards = ({ posts, slug }: PostCardsProps) => {
	if (slug === 'short') {
		return (
			<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20">
				{posts.map((post) => (
					<ShortCard key={post.slug} post={post} />
				))}
			</div>
		)
	}

	return (
		<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20">
			{posts.map((post) => (
				<PostCard key={post.slug} post={post} />
			))}
		</div>
	)
}

export default PostCards
