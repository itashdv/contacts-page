import { IPickPoint } from '../../../types';

export const FETCH_REQUESTED = 'PICKPOINTS/FETCH_REQUESTED';
export const fetchPickpoints = () => ({ type: FETCH_REQUESTED });

export const FETCH_SUCCEEDED = 'PICKPOINTS/FETCH_SUCCEEDED';
export const setPickpoints = (payload: IPickPoint[]) => ({
  type: FETCH_SUCCEEDED,
  payload,
});

export const FETCH_FAILED = 'PICKPOINTS/FETCH_FAILED';
export const setPickpointsError = (payload: string) => ({
  type: FETCH_FAILED,
  payload,
});

export const LOCATION_SET = 'PICKPOINTS/LOCATION_SET';
export const setLocation = (payload: IPickPoint) => ({
  type: LOCATION_SET,
  payload,
});
