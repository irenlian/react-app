import React from 'react';
import { render, RenderOptions, queries, screen, BoundFunctions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MemoryRouter, Route } from 'react-router-dom';

import '@testing-library/jest-dom';

import createTestStore from './createTestStore';
import history from '~/app/history';
import { customQueries } from './queries';

type OptionsType = RenderOptions & {
  initialState?: any;
};

const AllTheProviders: (storeInitialState?: any) => React.FC<{ children?: React.ReactNode }> =
  (storeInitialState: any = {}) =>
  ({ children }) => {
    return (
      <Provider store={createTestStore(storeInitialState)}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </Provider>
    );
  };

const customRender = (ui: any, options?: OptionsType) =>
  render(ui, {
    wrapper: AllTheProviders(options?.initialState),
    ...options,
    queries: {
      ...queries,
      ...customQueries,
    },
  });

export const renderWithRouter = (children: React.ReactElement, route: string, path = '/', props?: OptionsType) =>
  customRender(
    <MemoryRouter initialEntries={[route]}>
      <Route path={path}>{children}</Route>
    </MemoryRouter>,
    props,
  );

const boundQueries = Object.entries(customQueries).reduce((bounded, [queryName, queryFn]) => {
  // eslint-disable-next-line no-param-reassign
  bounded[queryName as keyof typeof customQueries] = queryFn.bind(null, document.body);
  return bounded;
}, {} as BoundFunctions<typeof customQueries>);

const customScreen = { ...screen, ...boundQueries };

export * from '@testing-library/react';
export { customRender as render };
export { customScreen as screen };
export { default as userEvent } from '@testing-library/user-event';
