export interface IActionData {
	id?: string,
	table: string,
	type: any,
	value?: any,
	name?: string,
	position?: number,
	values?: any
}

export interface IMigration {
	undo: IActionData,
	redo: IActionData
}

export interface IHistoryActions {
	[index: number]: (data: any, opts: any) => Promise<any>
}

export interface IActionOptions {
	full_rename?: boolean,
	apply?: boolean,
	save?: boolean
}