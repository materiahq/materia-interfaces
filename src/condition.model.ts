export interface ICondition {
	entity?: string
	name: string
	operator: string
	value: any
	operand?: string
	operandPriority?: number
}

export type IConditions = ICondition[];