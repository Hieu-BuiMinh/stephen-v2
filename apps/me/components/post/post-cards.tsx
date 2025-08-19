import type { ARTICLES, BOOKS_POST_TYPE, DEV_POST_TYPE, TPost } from '@repo/stephen-v2-contents'
import { cn } from '@repo/stephen-v2-utils'

import { PostCard } from '@/components/post/post-card'
import { ShortCard } from '@/components/post/short-card'

type PostCardsProps = {
	article?: ARTICLES
	slug: DEV_POST_TYPE | BOOKS_POST_TYPE
	posts: TPost[]
	className?: string
}

const PostCards = ({ article, posts, slug, className }: PostCardsProps) => {
	if (slug === 'short') {
		return (
			<div
				className={cn(
					'w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20',
					className
				)}
			>
				{posts.map((post) => (
					<ShortCard
						key={post.slug}
						collection={article?.toLocaleLowerCase() || 'dev'}
						type={slug}
						post={post}
					/>
				))}
			</div>
		)
	}

	return (
		<div
			className={cn(
				'w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20',
				className
			)}
		>
			{posts.map((post) => (
				<PostCard key={post.slug} collection={article?.toLocaleLowerCase() || 'dev'} type={slug} post={post} />
			))}
		</div>
	)
}

export default PostCards
