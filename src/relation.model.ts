export interface IRelation {
	type?: string,
	field?: string,
	as?: string,
	through?: string,
	reference: {
		entity: string,
		field?: string,
		as?: string
	}

	unique?: boolean,

	// internal use
	implicit?: boolean,
	entity?: string,
	paired?: boolean
}