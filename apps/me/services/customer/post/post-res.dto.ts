import type { IResponse } from '@/types/api'

export interface Post {
	id: string
	name: string
	slug: string
	published: boolean
	publishedAt?: string | null
	views: number
	likedBy: ReactionUser[]
}

export interface PostReactionResponse {
	id: string
	likedBy: ReactionUser[]
}

export interface PostListResponse {
	items: Post[]
	nextCursor: string | null
	hasNextPage: boolean
}

export interface ReactionUser {
	id: string
	clerkId: string
	firstName: string | null
	lastName: string | null
	avatarUrl: string | null
}

export interface Comment {
	id: string
	postId: string
	parentId: string | null
	clerkId: string
	content: string
	author: ReactionUser | null
	likedBy: ReactionUser[]
	dislikedBy: ReactionUser[]
	replies: Comment[]
	deleted: boolean
	createdAt: string
	updatedAt: string
}

export interface CommentListMeta {
	nextCursor: string | null
	hasNextPage: boolean
}

export interface CommentListResponse extends IResponse<Comment[]> {
	meta: CommentListMeta
}
