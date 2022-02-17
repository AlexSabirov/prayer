import { call, put, takeLatest } from '@redux-saga/core/effects';

import {
  createColumn,
  getColumns,
  removeColumn,
  updateColumn,
} from '../../../api/axios/axios';
import {
  AddColumnsAction,
  GetColumnsAction,
  RemoveColumnAction,
  UpdateColumnAction,
} from './actions';
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

export function* updateColumnWorker(action) {
  try {
    const data = yield call(updateColumn, action.payload);
    yield put(boardActions.updateColumn(data));
  } catch (e) {
    yield console.log(e);
  }
}

export function* removeColumnWorker(action) {
  try {
    yield call(removeColumn, action.payload);
    yield put(boardActions.removeColumn(action.payload));
  } catch (e) {
    yield console.log(e);
  }
}

export function* getColumnsWatcher() {
  yield takeLatest(GetColumnsAction.type, getColumnsWorker);
}

export function* addColumnWatcher() {
  yield takeLatest(AddColumnsAction.type, createColumnWorker);
}

export function* updateColumnWatcher() {
  yield takeLatest(UpdateColumnAction.type, updateColumnWorker);
}

export function* removeColumnWatcher() {
  yield takeLatest(RemoveColumnAction.type, removeColumnWorker);
}
