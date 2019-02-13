export enum WatcherEventType {
	INIT,
	ADD,
	REMOVE,
	CHANGE,
	REFRESH_TREE,
	UNLINK
}

export interface IWatcherEvent {
	type: WatcherEventType;
	path: string;
}