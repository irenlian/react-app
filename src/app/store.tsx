import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from '~/redux/root/sagas';
import { rootReducer } from '~/redux/root/reducers';
import history from './history';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
export default store;
