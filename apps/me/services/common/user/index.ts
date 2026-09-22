import { httpClient } from '@/lib/https'
import type { IResponse } from '@/types/api'

import type { SyncUserRequest } from './user-req.dto'
import type { SyncUserResponse } from './user-res.dto'

export const userService = {
	sync: {
		post: async (body: SyncUserRequest = {}) => {
			return httpClient.post<IResponse<SyncUserResponse>>('/sync', body)
		},
	},
}
