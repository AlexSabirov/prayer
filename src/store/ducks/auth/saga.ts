import { call, put, takeLatest } from '@redux-saga/core/effects';

import { signIn } from '../../../api/axios/axios';
import { Login } from '../../../api/axios/type';
import { SignIn, SignInAction } from './actions';

export function* SignInWorker(action: { payload: Login }) {
  try {
    const data = yield call(signIn, action.payload);
    yield put({
      type: SignIn,
      payload: {
        data: data,
      },
    });
  } catch (e) {
    yield console.log(e);
  }
}

export function* watchAuth() {
  yield takeLatest(SignInAction, SignInWorker);
}
