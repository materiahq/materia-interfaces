export interface IPermission {
	name: string
	file: string
	readOnly?: boolean
	description?: string
	middleware?: ((req: any, res: any, next: any) => any) | string
	code?: string
	invalid?: boolean
	fromAddon?: {
		name?: string
		package?: string
		logo?: string
		path?: string
	}
}