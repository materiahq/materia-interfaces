import { IConditions, IAction } from '.'

export interface IQuery {
	id: string
	type: string
	params?: IQueryParam[]
	opts?: {
		params?: IQueryParam[]
		select?: string[]
		conditions?: IConditions
		include?: IQueryInclude[]
		orderBy?: IQueryOrdering[]
		page?: number
		limit?: number
		query?: string
		model?: string
		action?: string
	}
	actions?: IAction[];
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

export interface IFindAllOptions {
	select?: Array<any>
	include?: Array<any>
	conditions?: Array<any>
	limit?: number
	offset?: number
	page?: number
	orderBy?: Array<string>
}

export interface IFindOneOptions {
	select?: Array<any>
	include?: Array<any>
	conditions?: Array<any>
	orderBy?: Array<string>
}

export interface ICustomQueryOptions {
	action: string;
	model?: string;
	params: IQueryParam[];
}


export interface IUpdateQueryOptions {
	values: any,
	conditions: IConditions
}
