import { IGitDiff } from ".";

export interface IGitRef {
	name: string,
	head: boolean
}

export interface IGitHistory {
	date: string,
	fulldate: string,
	author_name: string
	author_email: string
	author_email_md5: string,
	message: string,
	hash: string,
	refs: IGitRef[],
	parents: string,
	changes: any[]
}

export interface IGitHistoryDetails {
	summary: string,
	description: string,
	message: string,
	changes: Array<{
		index: string,
		path: string,
		diff: IGitDiff
	}>
}