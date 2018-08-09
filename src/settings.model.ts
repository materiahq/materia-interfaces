import { IServer, IDatabase } from "./index";

export interface ISettingsForm {
	general: {
		name: string,
		package: string,
		path: string,
		icon: string,
		rootPassword: string,
		live: {
			rootPassword: string,
			url: string
		}
	},
	versionning: {
		remoteSelected: string
	},
	server: IServer,
	database: IDatabase,
	client: {
		url: string,
		enabled: boolean,
		src?: string
		build: {
			enabled: boolean,
			started: boolean,
			watching?: boolean,
			autoWatch?: boolean,
			progress: number,
			scripts?: {
				build: string,
				watch?: string,
				prod?: string
			},
			dist?: string,
		}
	}
}

