import type { TPost } from '@repo/stephen-v2-contents'

import { BookCard } from '@/components/post/book-card'

type T = TPost & { bookCover: string }

type BookCardsProps = {
	posts: T[]
}

const BookCards = ({ posts }: BookCardsProps) => {
	return (
		<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20">
			{posts.map((post) => (
				<BookCard key={post.slug} post={post} />
			))}
		</div>
	)
}

export default BookCards
