import { toast } from '@repo/stephen-v2-ui/shadcn'
import { useInfiniteQuery, useMutation, useQueryClient } from '@repo/stephen-v2-utils/tanstack-query'

import { guestbookService } from '@/services/customer/guestbook'
import type { CreateGuestbookEntryRequest } from '@/services/customer/guestbook/guestbook-req.dto'
import type { IResponse } from '@/types/api'

const listParams = { limit: 20 }

interface GuestbookApiError {
	response?: {
		data: Pick<IResponse<null>, 'message'>
	}
}

export function useGuestbookComment(enabled: boolean) {
	const queryClient = useQueryClient()
	const queryKey = guestbookService.list.key(listParams)
	const invalidateList = () => void queryClient.invalidateQueries({ queryKey })

	return {
		comments: useInfiniteQuery({
			queryKey,
			queryFn: ({ pageParam }) => guestbookService.list.get({ ...listParams, page: pageParam }),
			initialPageParam: 1,
			getNextPageParam: (lastPage) =>
				lastPage.meta.page < lastPage.meta.totalPages ? lastPage.meta.page + 1 : undefined,
			enabled,
		}),
		create: useMutation({
			mutationFn: (body: CreateGuestbookEntryRequest) => guestbookService.create.post(body),
			onSuccess: invalidateList,
			onError: (error) => {
				const apiError = error as GuestbookApiError
				toast.error(apiError.response?.data.message ?? 'Failed to post message')
			},
		}),
		remove: useMutation({
			mutationFn: (id: string) => guestbookService.remove.delete(id),
			onSuccess: invalidateList,
		}),
	}
}
