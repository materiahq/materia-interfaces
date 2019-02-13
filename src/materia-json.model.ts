import {
	IGitConfig,
	ISessionConfig,
	IDatabaseConfig,
	IClientConfig,
	IServerConfig,
	IAddonsConfig
} from ".";

export interface IMateriaJson {
	name: string;
	icon?: string;
	git?: IGitConfig;
	rootPassword?: string;
	server: IServerConfig;
	session?: ISessionConfig;
	database?: IDatabaseConfig;
	addons?: IAddonsConfig;
	client?: IClientConfig;
	links?: string[];
}
