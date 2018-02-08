export interface IField {
	name: string
	type: string
	primary?: boolean
	unique?: boolean | string
	required?: boolean
	default?: boolean
	defaultValue?: any
	autoIncrement?: boolean

	read?: boolean
	write?: boolean

	isRelation?: boolean

	validators?: Array<any>
}