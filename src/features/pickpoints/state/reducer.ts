import { AnyAction } from '@reduxjs/toolkit';

import { IPickPoint } from '../../../types';
import {
  FETCH_REQUESTED,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  LOCATION_SET,
} from './actions';

interface InitialState {
  list: IPickPoint[];
  currentLocation: IPickPoint | null;
  pending: boolean;
  error: string;
}

const initialState: InitialState = {
  list: [],
  currentLocation: null,
  pending: false,
  error: '',
};

export const pickpointReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_REQUESTED:
      return { ...state, error: '', pending: true };
    // TODO: limit the scope of the variable to this specific case
    // by wrapping them in block
    case FETCH_SUCCEEDED: {
      const list: IPickPoint[] = action.payload;

      return { ...state, list, currentLocation: list[0], pending: false };
    }
    case FETCH_FAILED: {
      const error: string = action.payload;

      return { ...state, error, pending: false };
    }
    case LOCATION_SET: {
      const currentLocation: IPickPoint = action.payload;

      return { ...state, currentLocation };
    }
    default:
      return state;
  }
};
