import { useDispatch } from 'react-redux';

export default (action: Function) => {
  const dispatch = useDispatch();
  return (...props: any) => dispatch(action(...props));
};
