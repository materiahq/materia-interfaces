export interface ISQLiteDatabase {
	type: string,
	storage: string,
	live?: IDatabaseConfig
}

export interface ISQLDatabase {
	type: string,
	host: string,
	port: number,
	database: string,
	username: string,
	password?: string,
	live?: IDatabaseConfig
}

export type IDatabaseConfig
	= ISQLiteDatabase
	| ISQLDatabase;

export interface IDatabase {
	dev?: IDatabaseConfig,
	prod?: IDatabaseConfig,
	live?: IDatabaseConfig
}