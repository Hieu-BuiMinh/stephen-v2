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
