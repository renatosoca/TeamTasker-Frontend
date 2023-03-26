import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    loading: 'initial',
    projects: [],
    project: undefined,
    activeProject: undefined,
    modalProject: false,
  },
  reducers: {
    onLoading: ( state ) => {
      state.loading = 'loading';
    },
    onLoadingProjects: ( state, { payload } ) => {
      state.loading = 'success';
      state.projects = payload;
    },
    onAddProject: ( state, { payload } ) => {
      state.loading = 'success Add';
      state.projects.push( payload );
    },
    onOpenModal: (state) => {
      state.modalProject = true;
    },
    onCloseModal: (state) => {
      state.modalProject = false;
    },
  },
});

export const { onLoading, onLoadingProjects, onAddProject, onOpenModal, onCloseModal } = projectSlice.actions;