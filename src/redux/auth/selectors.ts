import { createSelector } from 'reselect';
import { RootStateType } from '../root/reducers';
import { AuthState as AuthStateType } from './reducers';

export const getStoreState: (store: RootStateType) => AuthStateType = ({ auth }) => auth;
export const getToken = createSelector(getStoreState, ({ token }) => token);
