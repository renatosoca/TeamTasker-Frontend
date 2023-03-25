import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    modalNewProject: false,
  },
  reducers: {
    onOpenModalNewProject: (state) => {
      state.modalNewProject = true;
    },
    onCloseModalNewProject: (state) => {
      state.modalNewProject = false;
    },
  },
});

export const { onOpenModalNewProject, onCloseModalNewProject } = uiSlice.actions;