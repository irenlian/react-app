import { createAction } from 'typesafe-actions';

const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';
const SET_TOKEN = 'auth/SET_TOKEN';

interface LoginError {
  error: string;
  errorDescription: string;
}

export const login = createAction(LOGIN)<string>();
export const logout = createAction(LOGOUT)();
export const setToken = createAction(SET_TOKEN)<string>();
