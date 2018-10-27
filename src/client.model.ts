export interface IClientBuild {
	www?: string
	scripts?: {
		build?: string,
		watch?: string,
		prod?: string
	},
	build?: boolean
	packageJsonPath?: string
	started?: boolean,
	progress?: number
	autoWatch?: boolean,
	watching?: boolean,
}

export interface IClientConfig {
	www?: string
	build?: boolean
	packageJsonPath?: string
	scripts?: {
		build?: string,
		prod?: string,
		watch?: string
	}
	autoWatch?: boolean
}