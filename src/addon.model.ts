export interface IAddon {
	package: string
	name: string
	path?: string
	config?: any
	setupConfig?: any[]

	description: string
	logo: string
	author: string
	version: string

	tags?: Array<{ id: string }>,
	category?: string,

	color?: string,

	installed: boolean
	installing: boolean

	git?: string,

	readme?: string,
	changelog?: string,

	published: any
}