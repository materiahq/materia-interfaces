export interface IServerConfigMode {
	port: number,
	host?: string,
	ssl?: boolean
}

export interface IServerConfig {
	dev?: IServerConfigMode,
	prod?: IServerConfigMode,
	live?: IServerConfigMode
}