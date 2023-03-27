import { combineReducers } from '@reduxjs/toolkit';

import { pickpointReducer } from '../features/pickpoints';

export const reducer = combineReducers({
  pickpoints: pickpointReducer,
});
