import type { IResponse } from '@/types/api'

export interface GuestbookAuthor {
	id: string
	clerkId: string
	firstName: string | null
	lastName: string | null
	avatarUrl: string | null
}

export interface GuestbookEntry {
	id: string
	clerkId: string
	message: string
	createdAt: string
	updatedAt: string
	author: GuestbookAuthor
}

export interface GuestbookListMeta {
	page: number
	limit: number
	total: number
	totalPages: number
}

export interface GuestbookListResponse extends IResponse<GuestbookEntry[]> {
	meta: GuestbookListMeta
}
