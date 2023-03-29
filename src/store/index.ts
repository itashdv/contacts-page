import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducer';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

// Типизируем один раз и импортируем там где надо
// чтобы не повторяться
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
