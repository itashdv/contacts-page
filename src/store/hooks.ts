import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './index';

// Для удобства экстрагируем dispatch и selector в отдельные хуки
// чтобы использовать по всему приложению
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
