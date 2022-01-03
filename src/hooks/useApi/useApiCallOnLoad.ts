import { useReducer, useEffect } from 'react';
import { AxiosPromise, AxiosError } from 'axios';
import { actions, reducer, initialState } from './localReducer';

type UseApiOnLoad<T> = [boolean, AxiosError<any, any> | undefined, T];

const useApiCallOnLoad = <T = any>(request: AxiosPromise<T>, skip = false): UseApiOnLoad<T> => {
  const [{ loading, error, data }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const makeCall = async () => {
      try {
        dispatch(actions.fetchAction());
        const { data: response } = await request;
        dispatch(actions.successAction(response));
        return response;
      } catch (err) {
        dispatch(actions.failAction(err as AxiosError));
        return null;
      }
    };

    if (!skip && !loading && !data && !error) {
      makeCall();
    }
  }, [data, error, loading, request, skip]);

  return [loading, error, data];
};

export default useApiCallOnLoad;
