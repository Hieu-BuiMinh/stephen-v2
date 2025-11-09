import type { ARTICLES } from '@repo/stephen-v2-contents'

import TopicBookPageView from '@/view/topics/pages/book/topic-book.page'
import TopicDevPage from '@/view/topics/pages/dev/topic-dev.page'
import TopicShortWritingPage from '@/view/topics/pages/short-writing/topic-short-writing.page'

interface ICollectionProps {
	params: Promise<{ collection: keyof typeof ARTICLES }>
}

async function TopicCollectionPage({ params }: ICollectionProps) {
	const { collection } = await params

	switch (collection) {
		case 'dev':
			return <TopicDevPage />

		case 'books':
			return <TopicBookPageView />

		case 'others':
			return <TopicShortWritingPage />

		default:
			return null
	}
}

export default TopicCollectionPage
