export interface IPermission {
	name: string,
	readOnly?: boolean,
	file?: string,
	description?: string,
	middleware?: ((req: any, res: any, next: any) => any) | string,
	code?: string,
	invalid?: boolean
}