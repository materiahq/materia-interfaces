export interface IFindAllOptions {
	select?: Array<any>
	include?: Array<any>
	conditions?: Array<any>
	limit?: number
	offset?: number
	page?: number
	orderBy?: Array<string>
}