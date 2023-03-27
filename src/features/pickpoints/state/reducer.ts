import { AnyAction } from '@reduxjs/toolkit';

import { IPickPoint } from '../../../types';
import { FETCH_REQUESTED, FETCH_SUCCEEDED, FETCH_FAILED } from './actions';

interface InitialState {
  list: IPickPoint[];
  pending: boolean;
  error: string;
}

const initialState: InitialState = {
  list: [],
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

      return { ...state, list, pending: false };
    }
    case FETCH_FAILED: {
      const error: string = action.payload;

      return { ...state, error, pending: false };
    }
    default:
      return state;
  }
};
