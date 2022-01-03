import { useReducer, useCallback } from 'react';
import { AxiosPromise, AxiosError } from 'axios';
import { actions, reducer, initialState } from './localReducer';

type UseApi<T> = [(request: AxiosPromise<T>) => Promise<T | undefined>, boolean, AxiosError<any, any> | undefined, T];

const useApiCall = <T = any>(): UseApi<T> => {
  const [{ loading, error, data }, dispatch] = useReducer(reducer, initialState);
  const makeRequest = useCallback(
    async (request: AxiosPromise<T>): Promise<T | undefined> => {
      if (loading) return;
      try {
        dispatch(actions.fetchAction());
        const { data: response } = await request;
        dispatch(actions.successAction(response));
      } catch (err) {
        dispatch(actions.failAction(err as AxiosError));
      }
    },
    [loading],
  );

  return [makeRequest, loading, error, data];
};

export default useApiCall;
