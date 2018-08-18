export interface IActionFilter {
	entity?: string;
	query?: string;
	method?: string;
	url?: string;
	onlySuccess?: boolean;
	onlyError?: boolean;
}

export interface IActionTarget {
	entity: string;
	query: string;
	params?: any;
}

export interface IAction {
	id: string;
	type: string;
	filter: IActionFilter;
	wait?: boolean;
	fromAddon?: string;
	action: IActionTarget;
}