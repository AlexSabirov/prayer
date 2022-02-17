import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

import { RemoveColumnBody } from '../../../api/axios/type';
import { initialState } from './state';
import { Column, Prayer } from './types';

interface NormalizeColumn {
  entities: {
    columns: Record<string, Column>;
  };
}
interface NormalizePrayer {
  entities: {
    prayers: Record<string, Prayer>;
  };
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    getColumns(state, action) {
      const columnSchema = new schema.Entity('columns');
      const columnListSchema = new schema.Array(columnSchema);
      const normalizedData: NormalizeColumn = normalize(action.payload, columnListSchema);
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
    removeColumn(state, action: PayloadAction<RemoveColumnBody>) {
      const { id } = action.payload;
      delete state.columns[id];
    },
    getPrayers(state, action) {
      const prayerSchema = new schema.Entity('prayers', {}, { idAttribute: 'columnId' });
      const prayerListSchema = new schema.Array(prayerSchema);
      const normalizedData: NormalizePrayer = normalize(action.payload, prayerListSchema);
      state.prayers = normalizedData.entities.prayers;
    },
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
