import { takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { login } from './actions';
import { onLogin } from './effects';

export function* loginSaga() {
  yield takeLatest(getType(login), onLogin);
}
