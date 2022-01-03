import { initialState as initialAuthState } from '../auth/reducers';
import { RootStateType } from './reducers';

const initialState: RootStateType = {
  router: {
    location: {
      pathname: '/',
      search: '',
      hash: '',
      state: '',
      query: {},
    },
    action: 'POP',
  },
  auth: initialAuthState,
};

export default initialState;
