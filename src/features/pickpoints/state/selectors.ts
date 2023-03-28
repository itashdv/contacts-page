import { RootState } from '../../../store';

export const selectPickpointState = (state: RootState) => ({
  list: state.pickpoints.list,
  pending: state.pickpoints.pending,
  error: state.pickpoints.error,
  currentLocation: state.pickpoints.currentLocation,
});
