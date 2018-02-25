export interface IGitRef {

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
	parents: string[],
	changes: any[]
}