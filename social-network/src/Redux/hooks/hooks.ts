import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;


// Сдесь мы сможем реализовывать свои хуки и тд., вот то что сверху написанно это взято из доки redux-toolkit это для типизации и не более