export interface IField {
	name?: string
	type?: string
	primary?: boolean
	required?: boolean
	default?: boolean
	autoIncrement?: boolean
	read?: boolean
	write?: boolean
	title?:boolean
	isRelation?: any
	generateFrom?: string
	unique?: boolean | string
	onDelete?: string
	onUpdate?: string
	component?: string

	defaultValue?: any
	validators?: Array<any>
}

export interface IFieldUpdate extends IField {
	references?: IFieldReference
}

export interface IFieldReference {
	entity: string
	field: string
}