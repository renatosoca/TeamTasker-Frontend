import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'init',
    user: { _id: '', name: '', lastname: '', username: '', email: '' },
    messageAPI: undefined,
    isConfirmed: undefined,
  },
  reducers: {
    onLoading: (state) => {
      state.status = 'loading';
      state.user = { _id: '', name: '', lastname: '', username: '', email: '' };
      state.messageAPI = undefined,
      state.isConfirmed = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.messageAPI = undefined,
      state.isConfirmed = undefined;
    },
    onRegister: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.messageAPI = payload,
      state.user = { _id: '', name: '', lastname: '', username: '', email: '' };
      state.isConfirmed = undefined;
    },
    onConfirmed: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.isConfirmed = payload;
      state.user = { _id: '', name: '', lastname: '', username: '', email: '' };
      state.messageAPI = undefined;
    },
    onLogoutUser: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.messageAPI = payload;
      state.user = { _id: '', name: '', lastname: '', username: '', email: '' };
      state.isConfirmed = undefined;
    },
    onClearMessage: (state) => {
      state.messageAPI = undefined;
    }
  },
});

export const { onLoading, onLogin, onRegister, onConfirmed, onLogoutUser, onClearMessage } = authSlice.actions;