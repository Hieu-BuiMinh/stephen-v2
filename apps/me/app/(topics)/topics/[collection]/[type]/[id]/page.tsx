import type { DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import React from 'react'

import TopicDevTypeDetailPageView from '@/view/topics/pages/dev/topic-dev-type-detail.page'

interface IPostDetailProps {
	params: Promise<{ collection: 'dev' | 'buddhism' | 'writing'; type: DEV_POST_TYPE; id: string }>
}

async function PostDetailPage({ params }: IPostDetailProps) {
	const { collection } = await params

	switch (collection) {
		case 'dev':
			return <TopicDevTypeDetailPageView params={params} />

		default:
			return null
	}
}

export default PostDetailPage
