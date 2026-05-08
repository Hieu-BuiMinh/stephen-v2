import { api as Api } from '@/lib/api'
import type { ZenQuoteResponse } from './quote-res.dto'

export const quoteService = {
	getRandomQuote: {
		key: () => ['get_random_quote'] as const,
		get: async () => {
			const res = await Api.get<ZenQuoteResponse>({
				url: '/quote/random',
			})
			// ZenQuotes returns an array, we take the first item and map q -> content, a -> author
			if (res && res.length > 0) {
				const item = res[0]
				return {
					content: item.q,
					author: item.a,
				}
			}
			return null
		},
	},
}
