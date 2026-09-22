'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

import type { Comment } from '@/services/customer/post/post-res.dto'

import PostComment, { type PostCommentActions } from './post-comment'

interface PostCommentsProps extends PostCommentActions {
	comments: Comment[]
}

function PostComments({ comments, ...actions }: PostCommentsProps) {
	const shouldReduceMotion = useReducedMotion()

	return (
		<div className="mt-5 rounded-lg border p-4">
			<AnimatePresence>
				{comments.length === 0 ? (
					<motion.div
						key="empty"
						initial={shouldReduceMotion ? false : { opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
						className="flex h-24 flex-col items-center justify-center gap-3 text-sm text-muted-foreground"
					>
						<span>Be the first to comment on this post</span>
						<span>(❁´◡`❁)</span>
					</motion.div>
				) : (
					comments.map((comment) => <PostComment comment={comment} key={comment.id} {...actions} />)
				)}
			</AnimatePresence>
		</div>
	)
}

export default PostComments
