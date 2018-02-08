// import { Permission } from "./permission.model";
import { IParam } from "./param.model";

export interface IEndpoint {
	method: string
	url: string

	name?: string
	desc?: string

	params?: IParam[]
	data?: any
	base?: string

	action?: string
	file?: string
	controller?: string
	type?: string
	query?: {
		entity: string
		id: string
	}
	fromAddon?: {
		name?: string
		package?: string
		logo?: string
		path?: string
	}
	code?: string
	permissions?: string[]
}