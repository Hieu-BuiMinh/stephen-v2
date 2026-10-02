export interface ListGuestbookEntriesRequest {
	page?: number
	limit?: number
}

export interface CreateGuestbookEntryRequest {
	message: string
}
