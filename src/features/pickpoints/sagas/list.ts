import { call, put, takeEvery } from 'redux-saga/effects';

import { IPickPoint } from '../../../types';
import { DATA } from '../../../constants';

import {
  FETCH_REQUESTED,
  setPickpoints,
  setPickpointsError,
} from '../state/actions';

const fetchPickpointsHelper = () => setTimeout(() => DATA, 1000);

function* fetchPickpointListWorker(): unknown {
  try {
    const response = yield call(fetchPickpointsHelper);

    const list: IPickPoint[] = response.pickPoints;

    yield put(setPickpoints(list));
  } catch (error) {
    console.log(error);

    yield put(setPickpointsError('Ошибка загрузки данных!'));
  }
}

export function* fetchPickpointListWatcher() {
  yield takeEvery(FETCH_REQUESTED, fetchPickpointListWorker);
}
