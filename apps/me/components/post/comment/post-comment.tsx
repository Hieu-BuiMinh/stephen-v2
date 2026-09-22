'use client'

import NumberFlow from '@number-flow/react'
import { Avatar, AvatarFallback, AvatarImage, Button } from '@repo/stephen-v2-ui/shadcn'
import { MessageSquare, ThumbsDown, ThumbsUp, Trash2, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

import { ConfirmModal } from '@/components/modals/confirm-modal'
import type { CommentReactionRequest } from '@/services/customer/comment/comment-req.dto'
import type { Comment } from '@/services/customer/post/post-res.dto'

import Markdown from './comment-markdown'
import CommentReply from './comment-reply'

export interface PostCommentActions {
	currentUserId: string | null
	onReaction: (commentId: string, type: CommentReactionRequest['type']) => void
	onDelete: (commentId: string) => void
	reactingId: string | null
	deletingId: string | null
}

interface PostCommentProps extends PostCommentActions {
	comment: Comment
}

function PostComment({ comment, currentUserId, onReaction, onDelete, reactingId, deletingId }: PostCommentProps) {
	const [isReplying, setIsReplying] = useState(false)
	const shouldReduceMotion = useReducedMotion()
	const authorName = comment.author
		? [comment.author.firstName, comment.author.lastName].filter(Boolean).join(' ') || comment.author.clerkId
		: 'Deleted user'
	const hasLiked = comment.likedBy.some((user) => user.clerkId === currentUserId)
	const hasDisliked = comment.dislikedBy.some((user) => user.clerkId === currentUserId)
	const formattedDate = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(
		new Date(comment.createdAt)
	)

	return (
		<motion.article
			layout="position"
			initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
			transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
			className="flex flex-col pt-4 first:pt-0"
		>
			<header className="flex items-center gap-2 text-xs">
				<Avatar className="size-8">
					<AvatarImage src={comment.author?.avatarUrl ?? undefined} alt={authorName} />
					<AvatarFallback>{authorName.slice(0, 1)}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-3">
					<span className="text-sm font-semibold">{authorName}</span>
					<time className="text-muted-foreground" dateTime={comment.createdAt}>
						on {formattedDate}
					</time>
				</div>
				{!comment.deleted && currentUserId === comment.clerkId && (
					<ConfirmModal
						title="Delete your comment?"
						description="This comment will be removed."
						confirmText="Delete"
						variant="destructive"
						isLoading={deletingId === comment.id}
						onConfirm={() => onDelete(comment.id)}
					>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="ml-auto size-7"
							aria-label="Delete comment"
						>
							<Trash2 className="size-4 text-destructive" />
						</Button>
					</ConfirmModal>
				)}
			</header>

			<div className="ml-[14px] border-l border-dashed py-3 pl-[26px] text-sm text-foreground">
				{comment.deleted ? (
					<p className="italic text-muted-foreground">Comment deleted</p>
				) : (
					<Markdown>{comment.content}</Markdown>
				)}
			</div>

			{!comment.deleted && (
				<div className="flex items-center gap-3 text-muted-foreground">
					<Button
						type="button"
						className="h-8 gap-2 hover:text-foreground"
						variant="outline"
						aria-label="Like comment"
						aria-pressed={hasLiked}
						disabled={!currentUserId || reactingId === comment.id}
						onClick={() => onReaction(comment.id, 'LIKE')}
					>
						<ThumbsUp className={hasLiked ? 'size-4 fill-current' : 'size-4'} />
						<NumberFlow value={comment.likedBy.length} />
					</Button>
					<Button
						type="button"
						className="h-8 gap-2 hover:text-foreground"
						variant="outline"
						aria-label="Dislike comment"
						aria-pressed={hasDisliked}
						disabled={!currentUserId || reactingId === comment.id}
						onClick={() => onReaction(comment.id, 'DISLIKE')}
					>
						<ThumbsDown className={hasDisliked ? 'size-4 fill-current' : 'size-4'} />
						<NumberFlow value={comment.dislikedBy.length} />
					</Button>
					<Button
						type="button"
						onClick={() => setIsReplying((value) => !value)}
						className="h-8 gap-2 hover:text-foreground"
						variant="outline"
					>
						{isReplying ? <X className="size-4" /> : <MessageSquare className="size-4" />}
						{isReplying ? 'Cancel' : 'Reply'}
					</Button>
				</div>
			)}

			{isReplying && (
				<div className="ml-[14px] border-l border-dashed pl-[26px] pt-3">
					<CommentReply
						postId={comment.postId}
						commentId={comment.id}
						onCancel={() => setIsReplying(false)}
					/>
				</div>
			)}

			<AnimatePresence>
				{comment.replies.length > 0 && (
					<motion.div
						key="replies"
						exit={{ opacity: 0 }}
						transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
						className="ml-[14px] border-l border-dashed pl-[26px] pt-2"
					>
						<AnimatePresence>
							{comment.replies.map((reply) => (
								<PostComment
									comment={reply}
									key={reply.id}
									currentUserId={currentUserId}
									onReaction={onReaction}
									onDelete={onDelete}
									reactingId={reactingId}
									deletingId={deletingId}
								/>
							))}
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.article>
	)
}

export default PostComment
