import { IGitWorkingCopy, IGitHistory } from "."

export interface IGitRemoteSuccessResponse {
	workingCopy: IGitWorkingCopy;
	history: IGitHistory[];
}