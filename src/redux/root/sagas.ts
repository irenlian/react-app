import { all, setContext } from 'redux-saga/effects';
import { loginSaga } from '../auth/sagas';

export function* rootSaga() {
  yield all([setContext({}), loginSaga()]);
}
