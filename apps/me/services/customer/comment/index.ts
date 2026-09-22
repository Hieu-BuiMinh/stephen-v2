import { httpClient } from '@/lib/https'
import type { IResponse } from '@/types/api'

import type { CommentReactionRequest } from './comment-req.dto'
import type { Comment } from '../post/post-res.dto'

export const commentService = {
	remove: async (commentId: string) => httpClient.delete<IResponse<Comment>>(`/comments/${commentId}`),
	reaction: {
		post: async (commentId: string, body: CommentReactionRequest) =>
			httpClient.post<IResponse<Comment>>(`/comments/${commentId}/reaction`, body),
	},
}
