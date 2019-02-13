import {
    IAppConfig,
    IGitConfig,
    IDependencyMap,
    IServer,
    ISession,
    IScriptsMap,
    IDatabase,
    IClientConfig
} from '.';

export interface IDependenciesConfig {
	dev?: IDependencyMap;
	prod?: IDependencyMap;
}

export interface IEntitiesPositionConfig {
	[entityName: string]: {
		x: number,
		y: number
	}
}

export interface IAddonsConfig {
	[addon_name: string]: IAddonConfig;
}

export interface IAddonConfig {
	[name:string]: {
		[param_name:string]: any
	}
}

export interface IConfigOptions {
	live?: boolean;
}

export interface IFullConfig {
	app: IAppConfig;
	git?: IGitConfig;
	server: IServer;
	session?: ISession;
	dependencies?: IDependenciesConfig;
	links?: {
		dev: string[];
		prod: string[];
	};
	scripts?: IScriptsMap;
	database?: IDatabase;
	addons?: IAddonsConfig;
	client?: IClientConfig;
	entitiesPosition?: IEntitiesPositionConfig;
}