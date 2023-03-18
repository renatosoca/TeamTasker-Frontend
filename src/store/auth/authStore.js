import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'init',
    user: undefined,
    errorMessage: undefined,
    successMessage: undefined,
  },
  reducers: {
    onLoading: (state) => {
      state.status = 'loading';
      state.user = undefined;
      state.errorMessage = undefined;
      state.successMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
      state.successMessage = undefined;
    },
    onRegister: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.successMessage = payload;
      state.user = undefined;
      state.errorMessage = undefined;
    },
    onLogoutUser: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = undefined;
      state.errorMessage = payload;
      state.successMessage = undefined;
    },
  },
});

export const { onLoading, onLogin, onRegister, onLogoutUser } = authSlice.actions;