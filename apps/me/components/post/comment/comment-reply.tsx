'use client'

import { useAuth } from '@clerk/nextjs'

import { SingInButton } from '@/components/buttons/auth'
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

	if (!isSignedIn) {
		return (
			<div className="flex flex-col items-center justify-center gap-4">
				<span>Sign in to reply.</span>
				<SingInButton />
			</div>
		)
	}

	return (
		<CommentEditor
			placeholder="Write a reply..."
			onSubmit={(content) => reply.mutateAsync({ commentId, body: { content } })}
			successMessage="Reply posted"
			errorMessage="Failed to post reply"
			onCancel={onCancel}
			onSubmitted={onCancel}
		/>
	)
}

export default CommentReply
