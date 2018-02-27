import { IGitStatus } from "./git-status.model";
export interface IGitWorkingCopy {
	files: IGitStatus[],
	statusSelected: number,
	ahead: number,
	behind: number,
	tracking: string,
	conflicted: boolean
	created: boolean
	deleted: boolean
	modified: boolean
	notAdded: boolean
	renamed: boolean
}