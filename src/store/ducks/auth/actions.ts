import { createAction } from '@reduxjs/toolkit';

import { LoginBody } from '../../../api/axios/type';

export const SignInAction = createAction<LoginBody>('AUTH/SIGN_IN');
