import React from 'react'

import PostByTagDetailPageView from '@/view/tags/pages/post-by-tag-detail.page'

async function DirectlyReadPost({ params }: { params: Promise<{ id: string }> }) {
	return <PostByTagDetailPageView params={params} />
}

export default DirectlyReadPost
