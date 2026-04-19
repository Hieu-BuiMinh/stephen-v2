/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
	RawAxiosRequestHeaders,
} from 'axios'
import axios from 'axios'

type AxiosRequestInterceptorUse = (
	value: InternalAxiosRequestConfig<any>
) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AxiosResponseInterceptorUse<T> = (
	onFulfilled?: AxiosResponseInterceptorUseOnFulfilled<T>,
	onRejected?: AxiosResponseInterceptorUseOnRejected
) => number

type AxiosResponseInterceptorUseOnFulfilled<T> = ((value: T) => T | Promise<T>) | null
type AxiosResponseInterceptorUseOnRejected = ((error: any) => any) | null

type AxiosParams = {
	url: string
	config?: AxiosRequestConfig
}
type AxiosMutaionParams = {
	url: string
	data: Record<string, any> | FormData
	config?: AxiosRequestConfig
}

export class AxiosBuilder {
	private instance: AxiosInstance

	constructor() {
		this.instance = axios.create()
	}

	public setBaseUrl(baseURL: AxiosInstance['defaults']['baseURL']) {
		this.instance.defaults.baseURL = baseURL
		return this
	}

	public setHeaders(headers: RawAxiosRequestHeaders) {
		this.instance.defaults.headers.common = {
			...this.instance.defaults.headers.common,
			...headers,
		}
		return this
	}

	public addRequestInterceptor(interceptor: AxiosRequestInterceptorUse) {
		// this run for axios request
		this.instance.interceptors.request.use(interceptor)
		return this
	}

	public setResponseInterceptor(interceptor: AxiosResponseInterceptorUseOnFulfilled<any>) {
		// this run when axios request fulfilled
		// by passing first param to `this.instance.interceptors.response.use`
		this.instance.interceptors.response.use(interceptor, undefined)
		return this
	}

	public setResponseErrorInterceptor(interceptor: AxiosResponseInterceptorUseOnRejected) {
		// this run when axios request have error
		// by passing second param to `this.instance.interceptors.response.use`
		this.instance.interceptors.response.use(undefined, interceptor)
		return this
	}

	public setToken(token: string) {
		this.setHeaders({
			Authorization: `Bearer ${token}`,
		} as RawAxiosRequestHeaders)
		return this
	}

	public async get<T>({ url, config }: AxiosParams): Promise<T> {
		const res = await this.instance.get(url, config)
		return res as unknown as T
	}

	public async post<T>({ data, url, config }: AxiosMutaionParams): Promise<T> {
		const res = await this.instance.post(url, data, config)
		return res as unknown as T
	}

	public async put<T>({ data, url, config }: AxiosMutaionParams): Promise<T> {
		const res = await this.instance.put(url, data, config)
		return res as unknown as T
	}

	public async patch<T>({ data, url, config }: AxiosMutaionParams): Promise<T> {
		const res = await this.instance.patch(url, data, config)
		return res as unknown as T
	}

	public async delete<T>({ url, config }: Omit<AxiosMutaionParams, 'data'>): Promise<T> {
		const res = await this.instance.delete(url, config)
		return res as unknown as T
	}

	public build(): AxiosInstance {
		return this.instance
	}
}
