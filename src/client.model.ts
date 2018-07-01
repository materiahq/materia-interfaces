export interface IClientBuild {
	src?: string,
	scripts?: {
		build?: string,
		watch?: string,
		prod?: string
	},
	buildEnabled?: boolean
	dist?: string,
	started?: boolean,
	progress?: number
	autoWatch?: boolean,
	watching?: boolean,
}

export interface IClientConfig {
	src?:string
	dist?:string
	scripts?: {
		build?: string,
		prod?: string,
		watch?: string
	}
	autoWatch?: boolean
}