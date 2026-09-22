'use client'

import { useAuth } from '@clerk/nextjs'

import CommentEditor from '@/components/editor'
import { usePostManagement } from '@/hooks/use-post-management'

interface CommentReplyProps {
	postId: string
	commentId: string
	onCancel: () => void
}

function CommentReply({ postId, commentId, onCancel }: CommentReplyProps) {
	const { isSignedIn } = useAuth()
	const { reply } = usePostManagement(postId)

	return (
		<CommentEditor
			placeholder="Write a reply..."
			onSubmit={(content) => reply.mutateAsync({ commentId, body: { content } })}
			successMessage="Reply posted"
			errorMessage="Failed to post reply"
			onCancel={onCancel}
			onSubmitted={onCancel}
			disabled={!isSignedIn}
		/>
	)
}

export default CommentReply
