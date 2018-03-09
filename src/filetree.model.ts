export interface IFileTree {
	filename: string,
	path: string,
	fullpath: string,
	children?: Array<IFileTree>,
	incomplete?: boolean,
	expand?: boolean,
	selected?: boolean
}