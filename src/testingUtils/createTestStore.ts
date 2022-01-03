import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from '~/app/history';
import { rootReducer } from '~/redux/root/reducers';
import initialState from '~/redux/root/initialState';
import { rootSaga } from '~/redux/root/sagas';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const createInitialState = (state: any) => ({
  ...initialState,
  ...state,
});

const createTestStore = (newState: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(history),
    createInitialState(createInitialState(newState)),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createTestStore;
