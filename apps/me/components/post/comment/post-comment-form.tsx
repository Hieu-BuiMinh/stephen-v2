'use client'

import { useAuth } from '@clerk/nextjs'

import CommentEditor from '@/components/editor'
import { usePostManagement } from '@/hooks/use-post-management'

function PostCommentForm({ postId }: { postId: string }) {
	const { isSignedIn } = useAuth()
	const { comment } = usePostManagement(postId)

	return (
		<CommentEditor
			placeholder="Share your thoughts..."
			onSubmit={(content) => comment.mutateAsync({ content })}
			disabled={!isSignedIn}
		/>
	)
}

export default PostCommentForm
