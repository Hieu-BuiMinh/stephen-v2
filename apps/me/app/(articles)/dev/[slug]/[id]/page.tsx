import type { DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import React from 'react'

import PostDetailPageView from '@/view/articles/dev/post/pages/post-detail.page'

interface IPostPageProps {
	params: Promise<{ slug: DEV_POST_TYPE; id: string }>
}

function PostDetailPage({ params }: IPostPageProps) {
	return <PostDetailPageView params={params} />
}

export default PostDetailPage
