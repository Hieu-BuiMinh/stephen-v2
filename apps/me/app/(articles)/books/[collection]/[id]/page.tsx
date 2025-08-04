import type { BOOKS_POST_TYPE } from '@repo/stephen-v2-contents'

import BookDetailPageView from '@/view/articles/books/pages/book-detail.page'

interface IPostPageProps {
	params: Promise<{ collection: BOOKS_POST_TYPE; id: string }>
}

function BookDetailPage({ params }: IPostPageProps) {
	return <BookDetailPageView params={params} />
}

export default BookDetailPage
