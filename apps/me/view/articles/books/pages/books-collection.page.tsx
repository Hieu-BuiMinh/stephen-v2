import type { TPost } from '@repo/stephen-v2-contents'
import { type ARTICLES, bookRecap, type BOOKS_POST_TYPE } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import BookCards from '@/components/post/book-cards'

type T = TPost & { bookCover: string }

const sortedPostsByCollection = ({
	article,
	collection,
}: {
	article: keyof typeof ARTICLES
	collection: BOOKS_POST_TYPE
}) => {
	let postCollection = []

	switch (article) {
		case 'books':
			postCollection = bookRecap?.filter((post) => post.type === collection)
			break

		default:
			postCollection = []
			break
	}

	const posts = postCollection?.filter((post) => post?.type?.toLocaleLowerCase() === collection)

	return sortPostsByDate(posts, 'desc')
}

function BooksCollectionsPageView({
	article,
	collection,
}: {
	article: keyof typeof ARTICLES
	collection: BOOKS_POST_TYPE
}) {
	const postList = sortedPostsByCollection({ article, collection })

	return (
		<div className="w-full min-h-52 flex">
			{postList?.length > 0 ? (
				<BookCards posts={postList as T[]} collection={collection} />
			) : (
				<TextEffect preset="slide" per="word" delay={0.5} className="mx-auto text-xl capitalize">
					I have no posts yet... ㄟ( ▔, ▔ )ㄏ
				</TextEffect>
			)}
		</div>
	)
}

export default BooksCollectionsPageView
