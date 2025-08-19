import type { DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import React from 'react'

import TopicDevTypePage from '@/view/topics/pages/dev/topic-dev-type.page'

interface ITopicTypeProps {
	params: Promise<{ collection: 'dev' | 'buddhism' | 'writing'; type: DEV_POST_TYPE }>
}

async function TopicTypePage({ params }: ITopicTypeProps) {
	const { collection } = await params

	switch (collection) {
		case 'dev':
			return <TopicDevTypePage params={params} />

		default:
			return null
	}
}

export default TopicTypePage
