import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { initialState } from '../../state';

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    signIn(state, action) {
      (state.isAuthorized = true), (state.token = action.payload);
    },
    logout(state) {
      (state.isAuthorized = false), (state.token = '');
    },
    addColumn(state, action) {
      const id = v4();
      const { title } = action.payload;
      state.columns[id] = { id, title, prayers: {} };
    },
    updateColumn(state, action) {
      const { columnId, title } = action.payload;
      state.columns[columnId].title = title;
    },
    removeColumn(state, action) {
      const { columnId } = action.payload;
      delete state.columns[columnId];
    },
    addPrayer(state, action) {
      const id = v4();
      const { columnId, title } = action.payload;
      state.columns[columnId].prayers[id] = { id, title, checked: false, comments: {} };
    },
    updatePrayer(state, action) {
      const { columnId, prayersId, title } = action.payload;
      state.columns[columnId].prayers[prayersId].title = title;
    },
    checkedPrayer(state, action) {
      const { columnId, prayersId } = action.payload;
      state.columns[columnId].prayers[prayersId].checked =
        !state.columns[columnId].prayers[prayersId].checked;
    },
    removePrayer(state, action) {
      const { columnId, prayersId } = action.payload;
      delete state.columns[columnId].prayers[prayersId];
    },
    addComment(state, action) {
      const id = v4();
      const { columnId, prayersId, title } = action.payload;
      state.columns[columnId].prayers[prayersId].comments[id] = { id, title };
    },
    updateComment(state, action) {
      const { columnId, prayersId, commentId, title } = action.payload;
      state.columns[columnId].prayers[prayersId].comments[commentId].title = title;
    },
    removeComment(state, action) {
      const { columnId, prayersId, commentId } = action.payload;
      delete state.columns[columnId].prayers[prayersId].comments[commentId];
    },
  },
});

export default boardSlice.reducer;
