import * as fromUI from './shared/ui.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromaAuth from './auth/auth.reducer';


export interface AppState {
    ui: fromUI.State;
    auth: fromaAuth.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: fromUI.uiReducer,
    auth: fromaAuth.authReducer
};
