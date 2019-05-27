export interface ISQLiteDatabase {
	type: string,
	storage: string
}

export interface ISQLDatabase {
	type: string,
	host: string,
	port: number,
	database: string,
	username: string,
	password?: string,
	ssl?: boolean
}

export type IDatabaseConfig
	= ISQLiteDatabase
	| ISQLDatabase;

export interface IDatabase {
	dev?: IDatabaseConfig,
	prod?: IDatabaseConfig,
	live?: IDatabaseConfig
}

export interface IDatabaseDiffs {
	fields?: IDatabaseDiffActions[],
	entities?: IDatabaseDiffActions[],
	relations?: IDatabaseDiffActions[],
	length?: number
}

export interface IDatabaseDiffActions {
	redo: IDatabaseAction,
	undo: IDatabaseAction
}

export interface IDatabaseAction {
	type: string,
	table: string,
	value?: any
}