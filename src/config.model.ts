import {
    IAppConfig,
    IGitConfig,
    IDependencyMap,
    IServer,
    ISession,
    IScriptsMap,
    IDatabase,
    IClientConfig
} from './index';

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

export interface IAddonConfig {
	[param_name:string]: any
}

export interface IAddonsConfig {
	[addon_name: string]: IAddonConfig;
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
	addons?: {
		dev?: IAddonsConfig;
		prod?: IAddonsConfig;
	}
	client?: IClientConfig;
	entitiesPosition?: IEntitiesPositionConfig;
}