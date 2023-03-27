import { all } from 'redux-saga/effects';

import { fetchPickpointListWatcher } from './list';

export function* pickpointSaga() {
  yield all([fetchPickpointListWatcher()]);
}
