export interface IServerConfig {
	port: number,
	host?: string,
	ssl?: boolean,
	cors?: boolean,
	bodyParser?: IBodyParserConfig
}

export interface IBodyParserConfig {
	json?: {
		inflate?: boolean,
		limit?: number | string,
		strict?: boolean,
		type?: string
	},
	urlencoded?: {
		extended?: boolean,
		inflate?: boolean,
		limit?: string | number,
		parameterLimit?: number,
		type?: string
	}
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