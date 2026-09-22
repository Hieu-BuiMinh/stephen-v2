import { AxiosBuilder } from '@repo/stephen-v2-utils/axios'

type TokenGetter = () => Promise<string | null>

let getToken: TokenGetter | undefined

export function setHttpTokenGetter(tokenGetter: TokenGetter | undefined) {
	getToken = tokenGetter
}

export const httpClient = new AxiosBuilder()
	.setBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080')
	.addRequestInterceptor(async (config) => {
		const token = await getToken?.()

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		} else {
			delete config.headers.Authorization
		}

		return config
	})
	.setResponseInterceptor((res) => res.data)
	.setResponseErrorInterceptor((error) => {
		console.error('[API ERROR]', error?.response?.status, error?.message)
		return Promise.reject(error)
	})
	.build()
