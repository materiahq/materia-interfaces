import { IField } from "./field.model";
import { IRelation } from "./relation.model";
import { IQuery } from "./query.model";

export interface IEndpointGeneratorOption {
	enabled: boolean,
	url: string
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

	fromAddon?: any,
	isRelation?: boolean,
	relatedEntities?: any[]
}