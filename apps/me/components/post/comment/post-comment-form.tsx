'use client'

import { useAuth } from '@clerk/nextjs'

import { SingInButton } from '@/components/buttons/auth'
import CommentEditor from '@/components/editor'
import { usePostManagement } from '@/hooks/use-post-management'

function PostCommentForm({ postId }: { postId: string }) {
	const { isSignedIn } = useAuth()
	const { comment } = usePostManagement(postId)

	if (!isSignedIn) {
		return (
			<div className="flex flex-col items- justify-center gap-2">
				<span className="font-caveat text-xl text-muted-foreground underline decoration-wavy">
					Sign in to leave a comment.
				</span>
				<SingInButton className="w-fit" />
			</div>
		)
	}

	return (
		<CommentEditor
			className="border-ring ring-[3px] ring-ring/50"
			placeholder="Share your thoughts..."
			onSubmit={(content) => comment.mutateAsync({ content })}
			useApiMessage
		/>
	)
}

export default PostCommentForm
