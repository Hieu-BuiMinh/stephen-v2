'use client'

import { useAuth } from '@clerk/nextjs'

import { usePostManagement } from '@/hooks/use-post-management'

import PostLikeButton from './post-like-button'

interface PostLikeButtonContainerProps {
	postId: string
	className?: string
}

function AuthenticatedPostLikeButton({ postId, className }: PostLikeButtonContainerProps) {
	const { userId } = useAuth()
	const { post, postReaction } = usePostManagement(postId)

	if (post.data?.data.published !== true) return null

	return (
		<PostLikeButton
			likes={post.data.data.likedBy.length}
			hasLiked={post.data.data.likedBy.some((user) => user.clerkId === userId)}
			className={className}
			onLike={() => postReaction.mutate({ type: 'LIKE' })}
			isLoading={postReaction.isPending}
		/>
	)
}

function PostLikeButtonContainer({ postId, className }: PostLikeButtonContainerProps) {
	const { isSignedIn } = useAuth()

	if (!isSignedIn) return null

	return <AuthenticatedPostLikeButton postId={postId} className={className} />
}

export default PostLikeButtonContainer
