import { Action } from '@ngrx/store';

export enum UserActionTypes {
    MasUserName = '[User] Mask User Name'
}

export class MasUserName implements Action {
    readonly type = UserActionTypes.MasUserName
    constructor(public payload: boolean) { }
}

export type UserActions = MasUserName