import React from 'react'

import { allPostByTag } from '@/constants/post/post.constant'
import PostByTagDetailPageView from '@/view/tags/pages/post-by-tag-detail.page'

export const dynamic = 'force-static'

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return allPostByTag.map((post) => ({ id: post.id }))
}

async function DirectlyReadPost({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	return <PostByTagDetailPageView id={id} />
}

export default DirectlyReadPost
