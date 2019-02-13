import { IField } from "./field.model";
import { IRelation } from "./relation.model";
import { IQuery } from "./query.model";

export interface IEndpointGeneratorOption {
	enabled: boolean,
	url: string
}

export interface IVirtualEntityConfig {
	id: string
	x: number
	y: number
	fields?: Array<IField>
	relations?: Array<any>
	queries?: Array<any>
	isRelation?: any
	virtual: boolean
}

export interface IEntityConfig {
	id: string
	x: number
	y: number
	fields?: Array<IField>
	relations?: Array<any>
	queries?: Array<any>
	isRelation?: any
}

export interface IEntity {
	name: string,

	x?: number,
	y?: number,

	timestamps?: boolean,
	endpointsGenerated?: {
		list: IEndpointGeneratorOption,
		get: IEndpointGeneratorOption,
		create: IEndpointGeneratorOption,
		update: IEndpointGeneratorOption,
		delete: IEndpointGeneratorOption
	}

	fields: IField[],
	relations?: IRelation[]
	queries?: IQuery[]

	virtual?: boolean;
	fromAddon?: any,
	isRelation?: boolean,
	relatedEntities?: any[]
}