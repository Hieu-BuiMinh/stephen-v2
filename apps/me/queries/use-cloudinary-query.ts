import { useMutation, useQuery, useQueryClient } from '@repo/stephen-v2-utils/tanstack-query'
import { CloudinaryResource, CloudinaryService } from '@/services/cloudinary.service'

export const cloudinaryKeys = {
	all: ['cloudinary'] as const,
	folders: (path?: string) => [...cloudinaryKeys.all, 'folders', path || 'root'] as const,
	resources: (folder: string) => [...cloudinaryKeys.all, 'resources', folder] as const,
}

export function useCloudinaryQuery() {
	const queryClient = useQueryClient()

	return {
		// Queries
		useFolders: (path?: string) =>
			useQuery({
				queryKey: cloudinaryKeys.folders(path),
				queryFn: async () => {
					const res = await CloudinaryService.listFolders(path)
					return res.folders
				},
				staleTime: 1000 * 60 * 5,
			}),

		useResources: (folder: string) =>
			useQuery<CloudinaryResource[], Error>({
				queryKey: cloudinaryKeys.resources(folder),
				queryFn: async () => {
					const res = await CloudinaryService.listResources(folder)
					return res.resources
				},
				staleTime: 1000 * 60 * 5,
			}),

		// Mutations
		useUpload: (folder: string) =>
			useMutation({
				mutationFn: ({ file }: { file: File }) => CloudinaryService.upload(file, folder),
				onSuccess: () => {
					void queryClient.invalidateQueries({ queryKey: cloudinaryKeys.all })
				},
			}),

		useDelete: (folder: string) =>
			useMutation({
				mutationFn: ({ publicId, resourceType }: { publicId: string; resourceType: string }) =>
					CloudinaryService.deleteResource(publicId, resourceType),
				onSuccess: () => {
					void queryClient.invalidateQueries({ queryKey: cloudinaryKeys.resources(folder) })
				},
			}),
	}
}
