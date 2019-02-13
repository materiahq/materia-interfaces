export interface IMateriaError {
	message: string
}

export interface IErrorOptions {
	slug?: string
	issue?: number
	debug?: string
	originalError?: Error
}