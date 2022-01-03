/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { createi18n } from './i18n';

import { initClient } from './api/rest/apiBase';

import { App } from './app/app';
import history from './app/history';
import store from './app/store';
import ErrorBoundary from '~/shared/errorBoundary';

initClient(store);
createi18n('en');

const Root = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ErrorBoundary>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
