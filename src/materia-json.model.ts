import { IAppConfig, IGitConfig, ISessionConfig, IDatabaseConfig, IClientConfig, IServerConfig } from ".";
export interface IMateriaJson {
	name: string,
	icon?: string
	git?: IGitConfig
	server: IServerConfig,
	session?: ISessionConfig,
	database?: IDatabaseConfig,
	addons?: {
		[addon: string]: {
			[key: string]: any
		}
	}
	client?: IClientConfig
}

