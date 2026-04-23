import { AxiosBuilder } from '@repo/stephen-v2-utils/axios'

export const api = new AxiosBuilder()
	.setBaseUrl('/api')
	.setResponseInterceptor((res) => res.data)
	.setResponseErrorInterceptor((error) => {
		console.error('[API ERROR SEVERE]', error?.response?.status, error?.message)
		return Promise.reject(error)
	})
