import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from '../../state';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<string>) {
      state.isAuthorized = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isAuthorized = false;
      state.token = '';
    },
  },
});

export default authSlice.reducer;
