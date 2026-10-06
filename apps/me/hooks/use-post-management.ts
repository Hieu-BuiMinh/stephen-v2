import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@repo/stephen-v2-utils/tanstack-query'

import { adminPostService } from '@/services/admin/post'
import { commentService } from '@/services/customer/comment'
import type { CommentReactionRequest } from '@/services/customer/comment/comment-req.dto'
import { postService } from '@/services/customer/post'
import type { CreateCommentRequest, PostReactionRequest } from '@/services/customer/post/post-req.dto'

export function usePostComments(postId: string, enabled: boolean) {
	return useInfiniteQuery({
		queryKey: postService.comments.key(postId),
		queryFn: ({ pageParam }) => postService.comments.get({ postId, limit: 20, cursor: pageParam }),
		initialPageParam: undefined as string | undefined,
		getNextPageParam: (lastPage) =>
			lastPage.meta.hasNextPage ? (lastPage.meta.nextCursor ?? undefined) : undefined,
		enabled,
	})
}

export function usePostManagement(postId: string) {
	const queryClient = useQueryClient()

	const invalidatePost = () => {
		void queryClient.invalidateQueries({ queryKey: postService.detail.key(postId) })
		void queryClient.invalidateQueries({ queryKey: adminPostService.list.key() })
	}
	const invalidateComments = () => {
		void queryClient.invalidateQueries({ queryKey: postService.comments.key(postId) })
	}

	return {
		post: useQuery({
			queryKey: postService.detail.key(postId),
			queryFn: () => postService.detail.get(postId),
		}),
		view: useMutation({
			mutationFn: (id: string) => postService.view.post(id),
			onSuccess: invalidatePost,
		}),
		publish: useMutation({
			mutationFn: ({ id, published }: { id: string; published: boolean }) =>
				published
					? adminPostService.publish.patch(id, { published: true })
					: adminPostService.unpublish.patch(id),
			onSuccess: invalidatePost,
		}),
		import: useMutation({
			mutationFn: adminPostService.import.post,
			onSuccess: invalidatePost,
		}),
		comment: useMutation({
			mutationFn: (body: CreateCommentRequest) => postService.comments.post(postId, body),
			onSuccess: invalidateComments,
		}),
		reply: useMutation({
			mutationFn: ({ commentId, body }: { commentId: string; body: CreateCommentRequest }) =>
				postService.comments.reply(postId, commentId, body),
			onSuccess: invalidateComments,
		}),
		removeComment: useMutation({
			mutationFn: (commentId: string) => commentService.remove(commentId),
			onSuccess: invalidateComments,
		}),
		postReaction: useMutation({
			mutationFn: (body: PostReactionRequest) => postService.reaction.post(postId, body),
			onSuccess: invalidatePost,
		}),
		commentReaction: useMutation({
			mutationFn: ({ commentId, body }: { commentId: string; body: CommentReactionRequest }) =>
				commentService.reaction.post(commentId, body),
			onSuccess: invalidateComments,
		}),
	}
}
