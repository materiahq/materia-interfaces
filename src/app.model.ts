import { IEntity, IAddon, IEndpoint, IDatabase, IServer, IServerConfig, IClientBuild, IRelation, IClientConfig } from "./index";

export interface IAppConfig {
	name: string,
	icon?: string,
	version: string,
	package: string,
	rootPassword?: string,
	live?: {
		url: string,
		rootPassword: string
	}
}

export interface IApp {
	id: string
	package: string
	name?: string
	path: string
	icon?: string
	loading?: boolean
	hasStatic?: boolean
	url?: string
	liveUrl?: string
	packageJson?: any
	mode: string
	rootPassword?: string
	live?: {
		url: string,
		rootPassword: string
	}
	// started: boolean

	database?: {
		disabled: boolean
		config: IDatabase
	}
	server?: IServer,
	client?: IClientConfig,

	entities?: IEntity[]
	relations?: IRelation[]
	addons?: IAddon[]
	api?: IEndpoint[]

	invalid?: boolean
	error?: any
	stack?: any
	controllers?: Array<string>
	models?: Array<string>
	permissions?: Array<{
		description: string
		file: string
		name: string
		readOnly: boolean
		code?: string
	}>,
	lastZoom?: number
}