import type { ARTICLES, BOOKS_POST_TYPE, DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import React from 'react'

import TopicBookTypeDetailPage from '@/view/topics/pages/book/topic-book-type-detail.page'
import TopicDevTypeDetailPage from '@/view/topics/pages/dev/topic-dev-type-detail.page'

interface IPostDetailProps {
	params: Promise<{ collection: keyof typeof ARTICLES; type: DEV_POST_TYPE & BOOKS_POST_TYPE; id: string }>
}

async function PostDetailPage({ params }: IPostDetailProps) {
	const { collection } = await params

	switch (collection) {
		case 'dev':
			return <TopicDevTypeDetailPage params={params} />
		case 'books':
			return <TopicBookTypeDetailPage params={params} />

		default:
			return null
	}
}

export default PostDetailPage
