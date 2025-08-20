import type { ARTICLES, BOOKS_POST_TYPE, DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import React from 'react'

import TopicBookTypePageView from '@/view/topics/pages/book/topic-book-type.page'
import TopicDevTypePage from '@/view/topics/pages/dev/topic-dev-type.page'

interface ITopicTypeProps {
	params: Promise<{ collection: keyof typeof ARTICLES; type: DEV_POST_TYPE & BOOKS_POST_TYPE }>
}

async function TopicTypePage({ params }: ITopicTypeProps) {
	const { collection } = await params

	switch (collection) {
		case 'dev':
			return <TopicDevTypePage params={params} />
		case 'books':
			return <TopicBookTypePageView params={params} />

		default:
			return null
	}
}

export default TopicTypePage
