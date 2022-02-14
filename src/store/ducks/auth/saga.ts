import { call, put, takeLatest } from '@redux-saga/core/effects';

import { signIn } from '../../../api/axios/axios';
import { SignInAction } from './actions';
import { authActions } from './slice';

export function* SignInWorker(action) {
  try {
    const data = yield call(signIn, action.payload);
    yield put(authActions.signIn(data));
    yield call([console, 'log'], data);
  } catch (e) {
    yield console.log(e);
  }
}

export function* watchAuth() {
  yield takeLatest(SignInAction.type, SignInWorker);
}
