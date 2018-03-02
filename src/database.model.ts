export interface IDatabaseConfig {
	type: string,
	host: string,
	port: number,
	database: string,
	username: string,
	password?: string,
	storage?: string, // SQLite
	live?: IDatabaseConfig
}

export interface IDatabase {
	dev?: IDatabaseConfig,
	prod?: IDatabaseConfig,
	live?: IDatabaseConfig
}