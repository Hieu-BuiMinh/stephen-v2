import type { BOOKS_POST_TYPE, TPost } from '@repo/stephen-v2-contents'
import { cn } from '@repo/stephen-v2-utils'

import { BookCard } from '@/components/post/book-card'

type T = TPost & { bookCover: string }

type BookCardsProps = {
	posts: T[]
	collection: BOOKS_POST_TYPE
	className?: string
}

const BookCards = ({ posts, collection, className }: BookCardsProps) => {
	return (
		<div
			className={cn(
				'w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20',
				className
			)}
		>
			{posts.map((post) => (
				<BookCard key={post.slug} article="books" collection={collection} post={post} />
			))}
		</div>
	)
}

export default BookCards
