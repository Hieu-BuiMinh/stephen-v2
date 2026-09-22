'use client'

import pluralize from 'pluralize'
import { unstable_ViewTransition as ViewTransition } from 'react'

import { usePostManagement } from '@/hooks/use-post-management'

function PostCardStats({ postId }: { postId: string }) {
	const { post } = usePostManagement(postId)
	const likes = post.data?.data.likedBy.length ?? 0
	const views = post.data?.data.views ?? 0

	return (
		<div className="flex gap-2">
			<ViewTransition name={`like-${postId}`}>
				<div>{pluralize('like', likes, true)}</div>
			</ViewTransition>
			<div>&middot;</div>
			<ViewTransition name={`view-${postId}`}>
				<div>{pluralize('view', views, true)}</div>
			</ViewTransition>
		</div>
	)
}

export default PostCardStats
