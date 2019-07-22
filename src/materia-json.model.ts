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
	server: IServerConfig;
	icon?: string;
	git?: IGitConfig;
	rootPassword?: string;
	session?: ISessionConfig;
	database?: IDatabaseConfig;
	addons?: IAddonsConfig;
	client?: IClientConfig;
	links?: string[];
}
