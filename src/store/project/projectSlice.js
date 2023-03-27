import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    loading: 'initial',
    projects: [
      {
        _id: '',
        name: '',
        description: '',
        type: '',
        boards: [{ _id: '', title: '', background: '', project: '', tasks: []}],
        colaborators: [],
        owner: {},
      }
    ],
    project: undefined,
    activeProject: {
      _id: '',
      name: '',
      description: '',
      type: '',
      boards: [{ _id: '', title: '', background: '', project: '', tasks: [] }],
      colaborators: [],
      owner: {},
    },
  },
  reducers: {
    onLoading: ( state, { payload } ) => {
      state.loading = payload;
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
    onAddBoard: ( state, { payload } ) => {
      state.loading = 'success Add';
      state.projects = state.projects.map( (project) => {
        const { _id, boards } = project;

        return ( _id === payload.project ) ? { ...project, boards: [ ...boards, payload ] } : project;
      } );
      state.activeProject.boards.push( payload );
    }
  },
});

export const { onLoading, onLoadingProjects, onActiveProject, onAddProject, onAddBoard } = projectSlice.actions;