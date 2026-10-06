import { httpClient } from '@/lib/https'
import type { IResponse } from '@/types/api'

import type { CreateGuestbookEntryRequest, ListGuestbookEntriesRequest } from './guestbook-req.dto'
import type { GuestbookEntry, GuestbookListResponse } from './guestbook-res.dto'

export const guestbookService = {
	list: {
		key: (params?: ListGuestbookEntriesRequest) => ['list_guestbook_entries', params] as const,
		get: async (params?: ListGuestbookEntriesRequest) =>
			httpClient.get<GuestbookListResponse>('/guestbook', {
				params,
			}) as unknown as Promise<GuestbookListResponse>,
	},
	create: {
		key: () => ['post_guestbook_entry'] as const,
		post: async (body: CreateGuestbookEntryRequest) =>
			httpClient.post<IResponse<GuestbookEntry>>('/guestbook', body),
	},
	remove: {
		key: (id: string) => ['delete_guestbook_entry', id] as const,
		delete: async (id: string) => httpClient.delete<IResponse<{ id: string }>>(`/guestbook/${id}`),
	},
}
