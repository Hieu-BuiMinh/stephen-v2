import type { UserResource } from '@clerk/nextjs/types'

import { httpClient } from '@/lib/https'
import type { IResponse } from '@/types/api'

import type { SyncUserRequest } from './user-req.dto'
import type { SyncUserResponse } from './user-res.dto'

export const userService = {
	profileImage: {
		update: async (user: UserResource, file: Blob | File | string | null) => user.setProfileImage({ file }),
	},
	sync: {
		post: async (body: SyncUserRequest = {}) => {
			return httpClient.post<IResponse<SyncUserResponse>>('/sync', body)
		},
	},
}
