import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Store, AnyAction } from 'redux';

import { API_URL } from '~/config';
import { RootStateType } from '~/redux/root/reducers';
import { logout } from '~/redux/auth/actions';
import { getToken } from '~/redux/auth/selectors';

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 240 * 1000,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const configClient = (store: Store<RootStateType, AnyAction>, axiosClient: AxiosInstance) => () => {
  if (store) {
    const token = getToken(store.getState());

    if (token && axiosClient.defaults.headers.common.Authorization !== `Bearer ${token}`) {
      // eslint-disable-next-line no-param-reassign
      axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }
};

const client = axios.create(axiosConfig);

export const initClient = (store: Store) => {
  client.interceptors.response.use(
    response => response,
    async rejected => {
      const status: number = rejected?.response?.status;

      // If we have a 401, try and refresh our token and then replay call
      if (status === 401) {
        store.dispatch(logout());
      }

      return Promise.reject(rejected);
    },
  );

  const token = getToken(store.getState());
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  store.subscribe(configClient(store, client));
};

export default client;
