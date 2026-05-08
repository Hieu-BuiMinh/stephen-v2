import { useMutation, useQuery, useQueryClient } from '@repo/stephen-v2-utils/tanstack-query'

import { cloudinaryService } from '@/services/admin/cloudinary'
import type { CloudinaryResource } from '@/services/admin/cloudinary/cloudinary-res.dto'

export function useCloudinaryQuery() {
	const queryClient = useQueryClient()

	return {
		// Queries
		useFolders: (path?: string, enabled = true) =>
			useQuery({
				queryKey: cloudinaryService.listFolders.key({ path }),
				queryFn: () => cloudinaryService.listFolders.get({ path }),
				select: (res) => res.folders,
				staleTime: 1000 * 60 * 5,
				enabled,
			}),

		useResources: (folder: string, enabled = true) =>
			useQuery<CloudinaryResource[], Error>({
				queryKey: cloudinaryService.listResources.key({ folder }),
				queryFn: async () => {
					const res = await cloudinaryService.listResources.post({ folder })
					return res.resources
				},
				staleTime: 1000 * 60 * 5,
				enabled,
			}),

		// Mutations
		useUpload: (folder: string) =>
			useMutation({
				mutationFn: ({ file }: { file: File }) => cloudinaryService.upload.post({ file, folder }),
				onSuccess: () => {
					void queryClient.invalidateQueries({
						queryKey: cloudinaryService.listResources.key(),
					})
				},
			}),

		useDelete: (folder: string) =>
			useMutation({
				mutationFn: ({ publicId, resourceType }: { publicId: string; resourceType: string }) =>
					cloudinaryService.deleteResource.delete({ publicId, resourceType }),
				onSuccess: () => {
					void queryClient.invalidateQueries({
						queryKey: cloudinaryService.listResources.key(),
					})
				},
			}),
	}
}
