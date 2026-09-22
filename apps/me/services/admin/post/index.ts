import { httpClient } from '@/lib/https'
import type { IResponse } from '@/types/api'
import type { PublishPostRequest } from './post-req.dto'
import type { PostListResponse } from '@/services/customer/post/post-res.dto'

export const adminPostService = {
	list: {
		key: () => ['admin_list_posts'] as const,
		get: async () => httpClient.get<IResponse<PostListResponse>>('/admin/posts'),
	},
	import: {
		post: async () => httpClient.post<IResponse<null>>('/admin/posts/import'),
	},
	publish: {
		patch: async (postId: string, body: PublishPostRequest) =>
			httpClient.patch<IResponse<null>>(`/admin/posts/${postId}/publish`, body),
	},
	unpublish: {
		patch: async (postId: string) => httpClient.patch<IResponse<null>>(`/admin/posts/${postId}/unpublish`),
	},
}
