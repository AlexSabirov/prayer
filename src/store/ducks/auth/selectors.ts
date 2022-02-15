import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

export const selectorSelf = (state: RootState) => state;

export const selectorToken = createSelector(selectorSelf, (state) => {
  state.authSlice.token;
});
