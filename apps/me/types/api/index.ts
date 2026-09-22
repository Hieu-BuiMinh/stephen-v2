export interface IResponse<T, TMeta = unknown> {
	code: number
	data: T
	message: string
	meta?: TMeta
}
