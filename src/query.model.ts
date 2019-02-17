import { IAction } from '.';

export interface IQueryCondition {
	entity?: string
	name: string
	operator: string
	value: any
	operand?: string
	operandPriority?: number
}

export type IQueryConditions = IQueryCondition[];

export interface IQueryParamReference {
	entity: string
	field: string
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

export interface IQueryOrdering {
	field: string
	desc: boolean
}

export interface IQueryValues {
	[field: string]: string
}

export interface IQuery {
	id: string
	type: string
	params?: IQueryParam[]
	opts?: {
		values?: IQueryValues
		params?: IQueryParam[]
		select?: string[]
		conditions?: IQueryConditions
		include?: IQueryInclude[]
		orderBy?: IQueryOrdering[]
		page?: number | string
		limit?: number | string
		query?: string
		model?: string
		action?: string
	}
	actions?: IAction[];
	code?: string;
}

export interface IFindAllOptions {
	select?: string[]
	include?: IQueryInclude
	conditions?: IQueryConditions
	limit?: number
	offset?: number
	page?: number
	orderBy?: IQueryOrdering[]
}

export interface IFindOneOptions {
	select?: string[]
	include?: IQueryInclude
	conditions?: IQueryConditions
	orderBy?: IQueryOrdering[];
}

export interface ICustomQueryOptions {
	action: string;
	model?: string;
	params: IQueryParam[];
}


export interface IUpdateQueryOptions {
	values: IQueryValues,
	conditions: IQueryConditions
}
