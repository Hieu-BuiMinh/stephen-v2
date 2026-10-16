import { api as Api } from '@/lib/api'

import type { QuoteResponse } from './quote-res.dto'

export const quoteService = {
	getRandomQuote: {
		key: () => ['get_random_quote'] as const,
		get: async () => {
			const res = await Api.get<QuoteResponse>({
				url: '/quote/random',
			})
			return {
				content: res.quote,
				author: res.author,
			}
		},
	},
}
