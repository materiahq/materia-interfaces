export interface IAddon {
	package: string
	name: string
	description: string
	logo: string
	author: string
	version: string
	enabled: boolean
	installed: boolean
	installing: boolean

	published?: boolean
	lastVersion?: string
	path?: string
	config?: any
	setupConfig?: any[]
	banner?: string
	tags?: Array<{ id: string }>
	category?: string
	git?: string
	readme?: string
	changelog?: string
	color?: string
}

export interface IAddonTag {
	id: string;
}

export interface IAddonInfo {
	package: string;
	name: string;
	description: string;
	logo: string;
	author: string;
	version: string;
	tags: IAddonTag[];
	enabled: boolean;
	color: string;
}