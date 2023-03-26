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
    },
    onActiveProject: ( state, { payload } ) => {
      state.loading = 'success';
      state.activeProject = payload;
    },
    onAddProject: ( state, { payload } ) => {
      state.loading = 'success Add';
      state.projects.unshift( payload );
    },
  },
});

export const { onLoading, onLoadingProjects, onActiveProject, onAddProject } = projectSlice.actions;