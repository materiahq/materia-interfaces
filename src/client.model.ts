export interface IClientBuild {
	srcFolder?: string,
	scripts?: {
		build: string,
		watch: string,
		prod: string
	},
	buildFolder?: string,
	started?: boolean,
	progress?: number
	autoWatch?: boolean,
	watching?: boolean,
	buildEnabled?: boolean
}