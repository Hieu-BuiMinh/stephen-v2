'use client'

import { useAuth } from '@clerk/nextjs'
import { Button, toast } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'

import { usePostComments, usePostManagement } from '@/hooks/use-post-management'
import type { CommentReactionRequest } from '@/services/customer/comment/comment-req.dto'

import PostCommentForm from './post-comment-form'
import PostComments from './post-comments'

interface CommentSectionProps {
	postId: string
	className?: string
}

function CommentSection({ postId, className }: CommentSectionProps) {
	const { userId } = useAuth()
	const { post, commentReaction, removeComment } = usePostManagement(postId)
	const comments = usePostComments(postId, post.data?.data.published === true)
	const commentItems = comments.data?.pages.flatMap((page) => page.data) ?? []
	const reactingId = commentReaction.isPending ? commentReaction.variables?.commentId : null
	const deletingId = removeComment.isPending ? removeComment.variables : null

	const handleReaction = (commentId: string, type: CommentReactionRequest['type']) => {
		commentReaction.mutate(
			{ commentId, body: { type } },
			{ onError: () => toast.error('Failed to update reaction') }
		)
	}

	const handleDelete = (commentId: string) => {
		removeComment.mutate(commentId, {
			onSuccess: () => toast.success('Comment deleted'),
			onError: () => toast.error('Failed to delete comment'),
		})
	}

	if (post.data?.data.published !== true) return null

	return (
		<section className={cn('mt-5', className)} aria-label="Comments">
			<PostCommentForm postId={postId} />
			{comments.isPending ? (
				<p className="mt-5 text-sm text-muted-foreground">Loading comments...</p>
			) : comments.isError && !comments.data ? (
				<Button type="button" variant="outline" className="mt-5" onClick={() => void comments.refetch()}>
					Could not load comments. Retry
				</Button>
			) : (
				<>
					<PostComments
						comments={commentItems}
						currentUserId={userId ?? null}
						onReaction={handleReaction}
						onDelete={handleDelete}
						reactingId={reactingId ?? null}
						deletingId={deletingId ?? null}
					/>
					{comments.hasNextPage && (
						<Button
							type="button"
							variant="outline"
							className="mt-4"
							onClick={() => void comments.fetchNextPage()}
							disabled={comments.isFetchingNextPage}
						>
							{comments.isFetchingNextPage
								? 'Loading...'
								: comments.isFetchNextPageError
									? 'Retry loading comments'
									: 'Load more comments'}
						</Button>
					)}
				</>
			)}
		</section>
	)
}

export default CommentSection
