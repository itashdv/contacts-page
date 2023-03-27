import { all } from 'redux-saga/effects';

import { pickpointSaga } from '../features/pickpoints';

export function* rootSaga() {
  yield all([pickpointSaga()]);
}
