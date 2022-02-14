import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';
import { Login } from './types';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<Login>) {
      state.isAuthorized = true;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    logout(state) {
      state.isAuthorized = false;
      state.token = '';
      state.email = '';
      state.name = '';
      state.id = 0;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
