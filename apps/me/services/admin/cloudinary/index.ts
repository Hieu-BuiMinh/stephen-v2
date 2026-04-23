import { api as Api } from '@/lib/api'

import type {
	DeleteResourceRequest,
	ListFoldersRequest,
	ListResourcesRequest,
	UploadResourceRequest,
} from './cloudinary-req.dto'
import type { CloudinaryFolderResponse, CloudinaryListResponse, CloudinaryResource } from './cloudinary-res.dto'

export const cloudinaryService = {
	listFolders: {
		key: (params?: ListFoldersRequest) =>
			['get_cloudinary_folders', ...(params?.path ? [params.path] : [])] as const,
		get: async (params?: ListFoldersRequest) => {
			const url = params?.path ? `/cloudinary/folders/${params.path}` : '/cloudinary/folders'
			return Api.get<CloudinaryFolderResponse>({ url })
		},
	},

	listResources: {
		key: (params?: ListResourcesRequest) =>
			['get_cloudinary_resources', ...(params?.folder ? [params.folder] : [])] as const,
		post: async (params: ListResourcesRequest) => {
			return Api.post<CloudinaryListResponse>({
				url: '/cloudinary/resources/search',
				data: {
					expression: params.folder ? `folder="${params.folder}"` : '',
					max_results: 500,
					sort_by: [{ created_at: 'desc' }],
				},
			})
		},
	},

	upload: {
		post: async (params: UploadResourceRequest) => {
			const formData = new FormData()
			formData.append('file', params.file)
			formData.append('folder', params.folder)
			return Api.post<CloudinaryResource>({
				url: '/cloudinary/image/upload',
				data: formData,
				config: {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
			})
		},
	},

	deleteResource: {
		delete: async (params: DeleteResourceRequest) => {
			const { publicId, resourceType = 'image', type = 'upload' } = params
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return Api.delete<any>({
				url: `/cloudinary/resources/${resourceType}/${type}`,
				config: {
					params: {
						'public_ids[]': publicId,
					},
				},
			})
		},
	},
}
