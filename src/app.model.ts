import { IEntity, IAddon, IEndpoint, IDatabase, IServer, IServerConfig, IClientBuild, IRelation } from "./index";

export interface IAppConfig {
	name: string,
	icon?: string,
	version: string,
	package: string
}

export interface IApp {
	id: number
	package: string
	name?: string
	path: string
	icon?: string
	hasStatic?: boolean,
	url?: string

	mode: string
	live?: boolean
	packageJson?: any,
	// started: boolean

	database?: {
		disabled: boolean
		config: IDatabase
	}
	server?: IServer,
	client?: IClientBuild,

	entities?: IEntity[]
	relations?: IRelation[]
	addons?: IAddon[]
	api?: IEndpoint[]

	invalid?: boolean
	error?: any
	stack?: any
	controllers?: Array<string>
	models?: Array<string>
	permissions?: {
		description: string
		file: string
		name: string
		readOnly: boolean
	}
}