import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../../interfaces';

const initialState: AuthState = {
  status: 'init',
  user: undefined,
  errorMessage: undefined,
  successMessage: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoading: (state) => {
      state.status = 'loading';
      state.user = undefined;
      state.errorMessage = undefined;
      state.successMessage = undefined;
    },
    onLogin: (state, { payload }: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
      state.successMessage = undefined;
    },
    onRegister: (state, { payload }: PayloadAction<string>) => {
      state.status = 'not-authenticated';
      state.successMessage = payload;
      state.user = undefined;
      state.errorMessage = undefined;
    }
  },
});

export const { onLoading } = authSlice.actions;