'use client'

import { QueryClient, QueryClientProvider } from '@repo/stephen-v2-utils/tanstack-query'
import { useState } from 'react'

export default function QueryProvider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
					},
				},
			})
	)

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
