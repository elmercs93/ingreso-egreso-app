import * as fromUI from './shared/ui.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromaAuth from './auth/auth.reducer';
import * as fromIngresoEgreso from './ingreso-egreso/ingreso-egreso.reducer';


export interface AppState {
    ui: fromUI.State;
    auth: fromaAuth.AuthState;
    // ingresoEgreso: fromIngresoEgreso.IngresoEgresoState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: fromUI.uiReducer,
    auth: fromaAuth.authReducer,
    // ingresoEgreso: fromIngresoEgreso.ingresoEgresoReducer
};
