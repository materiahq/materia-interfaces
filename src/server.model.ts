export interface IServerConfig {
	port: number,
	host?: string,
	ssl?: boolean
}

export interface IServer {
	dev?: IServerConfig,
	prod?: IServerConfig,
	live?: IServerConfig
}

export interface ISessionConfig {
	secret?: string,
	maxAge?: number
}

export interface ISession {
	dev?: ISessionConfig,
	prod?: ISessionConfig
}