import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActionTypes, UserActions } from './user.actions';

export interface State extends fromRoot.appState {
    users: UserState
}

export interface UserState {
    maskUserName: boolean
}

const intialState: UserState = {
    maskUserName: false
}

const getUserState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserState,
    state => state.maskUserName
)

export function reducer(state: UserState = intialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.MasUserName:
            return {
                ...state,
                maskUserName: action.payload
            }
        default:
            return state;
    }
}