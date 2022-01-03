import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';

// local imports
import { History } from 'history';
import { authReducer, AuthState } from '../auth/reducers';

export interface RootStateType {
  router: RouterState;
  auth: AuthState;
}

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });
