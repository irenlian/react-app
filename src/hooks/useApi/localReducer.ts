import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { AxiosError } from 'axios';

const FETCH = 'fetch';
const SUCCESS = 'success';
const FAIL = 'fail';

export const actions = {
  fetchAction: createAction(FETCH)(),
  successAction: createAction(SUCCESS)<any>(),
  failAction: createAction(FAIL)<AxiosError<any, any>>(),
};

type State = {
  loading: boolean;
  data?: any;
  error?: AxiosError<any, any>;
};

export const initialState: State = {
  loading: false,
  error: undefined,
  data: undefined,
};

const reduceFetch = (state: State) => {
  return { ...state, loading: true };
};
const reduceSuccess = (state: State, { payload }: ActionType<typeof actions.successAction>) => {
  return {
    ...state,
    loading: false,
    data: payload,
  };
};
const reduceFail = (state: State, { payload }: ActionType<typeof actions.failAction>) => {
  return {
    ...state,
    loading: false,
    error: payload,
  };
};

export const reducer = createReducer<State, ActionType<typeof actions>>(initialState)
  .handleAction(actions.fetchAction, reduceFetch)
  .handleAction(actions.successAction, reduceSuccess)
  .handleAction(actions.failAction, reduceFail);
