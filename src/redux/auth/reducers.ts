import { ActionType, createReducer } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Actions from './actions';
import { TOKEN_COOKIE } from '~/config';

export interface AuthState {
  token?: string;
}

export const initialState: AuthState = {
  token: Cookie.get(TOKEN_COOKIE),
};

type ActionTypes = ActionType<typeof Actions>;
type Strategy<T> = (a: AuthState, b: ActionType<T>) => AuthState;
type EmptyStrategy = (a: AuthState) => AuthState;

export const setTokenStrategy: Strategy<typeof Actions.setToken> = (state, { payload }) => {
  Cookie.set(TOKEN_COOKIE, payload, { sameSite: 'lax' });

  return {
    ...state,
    token: payload,
  };
};

export const authReducer = createReducer<AuthState, ActionTypes>(initialState).handleAction(
  Actions.setToken,
  setTokenStrategy,
);
