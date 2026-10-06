import { httpClient } from '@/lib/https'
import type { IResponse } from '@/types/api'

import type {
	CreateCommentRequest,
	ListPostCommentsRequest,
	ListPostsRequest,
	PostReactionRequest,
} from './post-req.dto'
import type { CommentListResponse, Post, PostListResponse, PostReactionResponse } from './post-res.dto'

export const postService = {
	list: {
		key: (params?: ListPostsRequest) => ['list_posts', params] as const,
		get: async (params?: ListPostsRequest) => httpClient.get<IResponse<PostListResponse>>('/posts', { params }),
	},
	detail: {
		key: (id: string) => ['post_detail', id] as const,
		get: async (id: string) =>
			httpClient.get<IResponse<Post>>(`/posts/${id}`) as unknown as Promise<IResponse<Post>>,
	},
	view: {
		post: async (id: string) => httpClient.post<IResponse<null>>(`/posts/${id}/view`),
	},
	comments: {
		key: (postId: string) => ['post_comments', postId] as const,
		get: async ({ postId, ...params }: ListPostCommentsRequest) =>
			httpClient.get<CommentListResponse>(`/posts/${postId}/comments`, {
				params,
			}) as unknown as Promise<CommentListResponse>,
		post: async (postId: string, body: CreateCommentRequest) =>
			httpClient.post<IResponse<Comment>>(`/posts/${postId}/comments`, body),
		reply: async (postId: string, commentId: string, body: CreateCommentRequest) =>
			httpClient.post<IResponse<Comment>>(`/posts/${postId}/comments/${commentId}/replies`, body),
	},
	reaction: {
		post: async (postId: string, body: PostReactionRequest) =>
			httpClient.post<IResponse<PostReactionResponse>>(`/posts/${postId}/reaction`, body),
	},
}
