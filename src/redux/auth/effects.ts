import { put } from 'redux-saga/effects';
import { setToken } from './actions';

export function* onLogin() {
  try {
    const token = ''; // get token
    yield put(setToken(token));
  } catch (e) {
    console.log(e);
  }
}
