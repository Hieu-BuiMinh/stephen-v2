export interface UploadResourceRequest {
	file: File
	folder: string
}

export interface DeleteResourceRequest {
	publicId: string
	resourceType?: string // default 'image'
	type?: string // default 'upload'
}

export interface ListResourcesRequest {
	folder?: string
}

export interface ListFoldersRequest {
	path?: string
}
