export interface ITreeFile {
	filename: string
	path: string
	fullpath: string
	isDir: boolean
	incomplete?: boolean
	relativepath?: string
	children?: ITreeFile[]
	extension?: string
	level?: number
}