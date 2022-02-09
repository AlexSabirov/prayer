// import { call, put, takeLatest } from '@redux-saga/core/effects';

// import { signIn } from '../../../api/axios/axios';
import { Login } from '../../../api/axios/type';
// import { authSlice } from '../auth/slice';

export function* SignInWorker(action: { payload: Login }) {
  return yield action.payload;
  // try {
  //   const { data } = yield call(signIn, action.payload);
  //   yield put(authSlice.actions.signIn);
  // } catch {}
}

// export default function* watchAuth() {
//   yield takeLatest(authSlice.actions.signIn, SignInWorker);
// }
