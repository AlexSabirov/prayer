import { call, put, takeLatest } from '@redux-saga/core/effects';

import { createColumn, getColumns } from '../../../api/axios/axios';
import { AddColumnsAction, GetColumnsAction } from './actions';
import { boardActions } from './slice';

export function* getColumnsWorker() {
  try {
    const data = yield call(getColumns);
    yield put(boardActions.getColumns(data));
  } catch (e) {
    yield console.log(e);
  }
}

export function* createColumnWorker(action) {
  try {
    const data = yield call(createColumn, action.payload);
    yield put(boardActions.addColumn(data));
  } catch (e) {
    yield console.log(e);
  }
}

export function* getColumnsWatcher() {
  yield takeLatest(GetColumnsAction.type, getColumnsWorker);
}

export function* addColumnWatcher() {
  yield takeLatest(AddColumnsAction, createColumnWorker);
}
