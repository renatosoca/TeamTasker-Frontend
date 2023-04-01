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
    users: [],
    activeProject: {
      _id: '',
      name: '',
      description: '',
      type: '',
      boards: [{ _id: '', title: '', background: '', project: '', tasks: [] }],
      collaborators: [],
      owner: {},
    },
    activeBoard: { _id: '', title: '', background: '', project: '', tasks: [] },
  },
  reducers: {
    onLoadingDataProject: ( state, { payload } ) => {
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
    onDeleteProject: ( state, { payload } ) => {
      state.loading = 'success';
      state.projects = state.projects.filter( (project) => project._id !== payload );
    },
    onAddBoard: ( state, { payload } ) => {
      state.loading = 'success Add';
      state.projects = state.projects.map( (project) => (project._id === payload.project) ? {...project, boards: [...project.boards, payload]} : project );
      if ( payload.project === state.activeProject?._id ) state.activeProject.boards.push( payload );
    },
    onAddUsersSerach: ( state, { payload } ) => {
      state.users = [ ...payload ];
      state.loading = 'success';
    },
    onResetUsersSearch: ( state ) => {
      state.users = [];
    },
    onActiveBoard: ( state, { payload } ) => {
      state.loading = 'success';
      state.activeBoard = payload;
    },
    onDesactiveActiveBoard: ( state ) => {
      state.activeBoard = { _id: '', title: '', background: '', project: '', tasks: [] };
    },
  },
});

export const { 
  onLoadingDataProject, 
  onLoadingProjects, 
  onActiveProject, 
  onAddProject,
  onDeleteProject,
  onAddBoard, 
  onAddUsersSerach, 
  onResetUsersSearch,
  onActiveBoard,
  onDesactiveActiveBoard
} = projectSlice.actions;