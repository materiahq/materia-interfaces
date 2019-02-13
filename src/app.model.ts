import {
	IEntity,
	IAddon,
	IEndpoint,
	IDatabase,
	IServer, 
	IRelation,
	IClientConfig,
	IPermission
} from "./index";

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
	clientPackageJson?: any
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
	permissions?: IPermission,
	lastZoom?: number
}

export interface IAppOptions {
	mode?: string,
	runtimes?: string,
	nocolors?: boolean,
	level?: number,
	silent?: boolean,
	logSql?: boolean,
	logRequests?: boolean,
	prod?: boolean,
	port?: number,

	'database-host'?: string
	'database-port'?: number
	'database-db'?: string
	'database-username'?: string
	'database-password'?: string
	storage?: string // sqlite.database
}

export interface IApplyOptions {
	apply?: boolean
	history?: boolean
	save?: boolean
	db?: boolean
	wait_relations?: boolean
	fromAddon?: IEndpoint['fromAddon']
}