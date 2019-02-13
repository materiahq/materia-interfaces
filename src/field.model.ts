export interface IField {
	name: string
	type: string
	primary?: boolean
	required?: boolean
	default?: boolean
	autoIncrement?: boolean
	read?: boolean
	write?: boolean
	title?:boolean
	isRelation?: boolean
	generateFrom?: string
	unique?: boolean | string
	onDelete?: string
	onUpdate: string

	defaultValue?: any
	validators?: Array<any>
}

export interface IFieldReference {
	entity: string
	field: string
}