import { api } from '@/lib/api'

export type CloudinaryFolder = {
	name: string
	path: string
}

export type CloudinaryResource = {
	public_id: string
	format: string
	version: number
	resource_type: 'image' | 'video' | 'raw'
	type: string
	created_at: string
	bytes: number
	width: number
	height: number
	url: string
	secure_url: string
	folder: string
}

export type CloudinaryListResponse = {
	resources: CloudinaryResource[]
	next_cursor?: string
	total_count: number
}

export type CloudinaryFolderResponse = {
	folders: CloudinaryFolder[]
}

export const CloudinaryService = {
	// Root folders: /api/cloudinary/folders
	// Sub folders: /api/cloudinary/folders/:full_path
	listFolders: (path?: string) => {
		const url = path ? `/cloudinary/folders/${path}` : '/cloudinary/folders'
		return api.get<CloudinaryFolderResponse>({ url })
	},

	// Search API: /api/cloudinary/resources/search
	// NOTE: Cloudinary Search API only supports POST requests.
	// Parameters must be sent in the request BODY (data).
	listResources: (folder: string) => {
		return api.post<CloudinaryListResponse>({
			url: '/cloudinary/resources/search',
			data: {
				expression: folder ? `folder="${folder}"` : '',
				max_results: 500,
				sort_by: [{ created_at: 'desc' }],
			},
		})
	},

	// Upload: /api/cloudinary/image/upload
	upload: (file: File, folder: string) => {
		const formData = new FormData()
		formData.append('file', file)
		formData.append('folder', folder)
		return api.post<CloudinaryResource>({
			url: '/cloudinary/image/upload',
			data: formData,
			config: {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		})
	},

	// Delete: /api/cloudinary/resources/:resource_type/:type
	deleteResource: (publicId: string, resourceType: string = 'image', type: string = 'upload') => {
		return api.delete<any>({
			url: `/cloudinary/resources/${resourceType}/${type}`,
			config: {
				params: {
					'public_ids[]': publicId,
				},
			},
		})
	},
}
