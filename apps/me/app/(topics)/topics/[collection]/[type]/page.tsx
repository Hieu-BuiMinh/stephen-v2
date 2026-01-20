import type { BOOKS_POST_TYPE, DEV_POST_TYPE, OTHERS_POST_TYPE } from '@repo/stephen-v2-contents'
import type { ARTICLES } from '@repo/stephen-v2-contents'

import TopicBookTypePage from '@/view/topics/pages/book/topic-book-type.page'
import TopicDevTypePage from '@/view/topics/pages/dev/topic-dev-type.page'
import TopicShortWritingTypePage from '@/view/topics/pages/short-writing/topic-short-writing-type.page'
export const dynamic = 'force-static'

type TType = DEV_POST_TYPE | BOOKS_POST_TYPE | OTHERS_POST_TYPE
type TParams = Promise<{ collection: keyof typeof ARTICLES; type: TType }>

export default async function TopicTypePage({ params }: { params: TParams }) {
	const { collection } = await params

	switch (collection) {
		case 'dev':
			return <TopicDevTypePage params={params} />
		case 'books':
			return <TopicBookTypePage params={params} />
		case 'others':
			return <TopicShortWritingTypePage params={params} />
		default:
			return null
	}
}
