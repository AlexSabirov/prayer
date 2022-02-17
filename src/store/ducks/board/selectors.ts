import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

const selectorSelf = (state: RootState) => state;

export const selectorColumns = createSelector(
  selectorSelf,
  (state) => state.boardSlice.columns,
);

export const selectorPrayers = () =>
  createSelector(selectorSelf, (state) => state.boardSlice.prayers);
