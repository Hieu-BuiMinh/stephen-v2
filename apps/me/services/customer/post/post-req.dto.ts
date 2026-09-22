export interface ListPostsRequest {
	limit?: number
	cursor?: string
}

export interface ListPostCommentsRequest {
	postId: string
	parentId?: string
	limit?: number
	cursor?: string
}

export interface CreateCommentRequest {
	content: string
}

export interface PostReactionRequest {
	type: 'LIKE'
}
