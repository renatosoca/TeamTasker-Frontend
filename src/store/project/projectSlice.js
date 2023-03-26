import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    loading: 'initial',
    projects: [],
    project: undefined,
    activeProject: undefined,
  },
  reducers: {
    onLoading: ( state ) => {
      state.loading = 'loading';
    },
    onLoadingProjects: ( state, { payload } ) => {
      state.loading = 'success';
      state.projects = payload;
    }
  },
});

export const { onLoading, onLoadingProjects } = projectSlice.actions;