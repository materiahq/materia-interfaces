export interface IQuery {
	id: string
	type: string
	opts?: {
		params?: IQueryParam[]
		select?: string[]
		conditions?: any[]
		include?: IQueryInclude[]
		orderBy?: IQueryOrdering[]
		page?: string
		limit?: string
		query?: string
		model?: string
		action?: string
	}
	code?: string;
}

export interface IQueryParam {
	name: string
	type: string
	required: boolean
	component: string
	reference?: IQueryParamReference
}

export interface IQueryInclude {
	entity: string
	fields?: string[]
	include?: IQueryInclude[]
}

export interface IQueryParamReference {
	entity: string
	field: string
}

export interface IQueryOrdering {
	field: string
	desc: boolean
}
