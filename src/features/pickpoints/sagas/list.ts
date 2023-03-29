import { call, put, takeEvery } from 'redux-saga/effects';

import { IPickPoint } from '../../../types';
import { DATA } from '../../../constants';

import {
  FETCH_REQUESTED,
  setPickpoints,
  setPickpointsError,
} from '../state/actions';

// Делаем мокап для запроса на API для обоих случаев: success и fail
const fetchPickpointsHelper = (success: boolean, timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(DATA);
      } else {
        // Желательно создать что-то типа enum-а со списком
        // всевозможных ошибок
        reject('Ошибка загрузки данных!');
      }
    }, timeout);
  });
};

function* fetchPickpointListWorker(): unknown {
  try {
    const response = yield call(fetchPickpointsHelper, true, 2000);

    const list: IPickPoint[] = response.pickPoints;

    yield put(setPickpoints(list));
  } catch (error) {
    console.log(error);

    yield put(setPickpointsError(error));
  }
}

export function* fetchPickpointListWatcher() {
  yield takeEvery(FETCH_REQUESTED, fetchPickpointListWorker);
}
