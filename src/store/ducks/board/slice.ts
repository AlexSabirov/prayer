import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

import { initialState } from './state';
import { Column } from './types';

interface Normalize {
  entities: {
    columns: Record<string, Column>;
  };
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    getColumns(state, action) {
      const columnSchema = new schema.Entity('columns');
      const columnListSchema = new schema.Array(columnSchema);
      const normalizedData: Normalize = normalize(action.payload, columnListSchema);
      console.log(`NData:`, normalizedData.entities);
      state.columns = normalizedData.entities.columns;
    },
    addColumn(state, action: PayloadAction<Column>) {
      const { id, ...rest } = action.payload;
      state.columns[id] = { id, ...rest };
    },
    updateColumn(state, action: PayloadAction<Column>) {
      const { id, ...rest } = action.payload;
      state.columns[id] = { id, ...rest };
    },
    // removeColumn(state, action) {
    //   const { columnId } = action.payload;
    //   delete state.columns[columnId];
    // },
    // addPrayer(state, action) {
    //   const { columnId, title } = action.payload;
    //   state.columns[columnId].prayers[id] = { id, title, checked: false, comments: {} };
    // },
    // updatePrayer(state, action) {
    //   const { columnId, prayersId, title } = action.payload;
    //   state.columns[columnId].prayers[prayersId].title = title;
    // },
    // checkedPrayer(state, action) {
    //   const { columnId, prayersId } = action.payload;
    //   state.columns[columnId].prayers[prayersId].checked =
    //     !state.columns[columnId].prayers[prayersId].checked;
    // },
    // removePrayer(state, action) {
    //   const { columnId, prayersId } = action.payload;
    //   delete state.columns[columnId].prayers[prayersId];
    // },
    // addComment(state, action) {
    //   const { columnId, prayersId, title } = action.payload;
    //   state.columns[columnId].prayers[prayersId].comments[id] = { id, title };
    // },
    // updateComment(state, action) {
    //   const { columnId, prayersId, commentId, title } = action.payload;
    //   state.columns[columnId].prayers[prayersId].comments[commentId].title = title;
    // },
    // removeComment(state, action) {
    //   const { columnId, prayersId, commentId } = action.payload;
    //   delete state.columns[columnId].prayers[prayersId].comments[commentId];
    // },
  },
});
export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
