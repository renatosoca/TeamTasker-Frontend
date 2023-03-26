import { useDispatch, useSelector } from 'react-redux';

export const useUi = () => {
  const dispatch = useDispatch();
  const modalstate = useSelector( state => state.ui );
  return {
    ...modalstate,
    
    dispatch,
  }
}