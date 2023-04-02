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
        collaborators: [],
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
    successMessage: '',
    errorMessage: '',
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
    onEditProject: ( state, { payload } ) => {
      state.loading = 'success';
      state.projects = state.projects.map( (project) => (project._id === payload._id) ? payload : project );
      state.activeProject = payload;
    },
    onDeleteProject: ( state, { payload } ) => {
      state.loading = 'success';
      state.projects = state.projects.filter( (project) => project._id !== payload );
    },
    onActiveBoard: ( state, { payload } ) => {
      state.loading = 'success';
      state.activeBoard = payload;
    },
    onDesactiveActiveBoard: ( state ) => {
      state.activeBoard = { _id: '', title: '', background: '', project: '', tasks: [] };
    },
    onAddBoard: ( state, { payload } ) => {
      state.loading = 'success Add';
      state.projects = state.projects.map( (project) => (project._id === payload.project) ? {...project, boards: [...project.boards, payload]} : project );
      if ( payload.project === state.activeProject?._id ) state.activeProject.boards.push( payload );
    },
    onAddUsersSerach: ( state, { payload } ) => {
      state.loading = 'success';
      state.users = [ ...payload ];
    },
    onResetUsersSearch: ( state ) => {
      state.users = [];
    },
    onDeleteCollaborator: ( state, { payload } ) => {
      state.loading = 'success';
      state.successMessage = 'Colaborador eliminado correctamente';
      state.activeProject.collaborators = state.activeProject.collaborators.filter( (user) => user._id !== payload );

      state.projects = state.projects.map( (project) => (project._id === state.activeProject._id) ?
        {...project, collaborators: project.collaborators.filter( (user) => user._id !== payload )} : project );
    },
    onSuccessMessage: ( state, { payload } ) => {
      state.loading = 'success';
      state.successMessage = payload;
    },
    onErrorMessage: ( state, { payload } ) => {
      state.loading = 'error';
      state.errorMessage = payload;
    },
    onClearMessages: ( state ) => {
      state.successMessage = '';
      state.errorMessage = '';
    }
  },
});

export const { 
  onLoadingDataProject, 
  onLoadingProjects,
  onActiveProject, 
  onAddProject,
  onEditProject,
  onDeleteProject,
  onAddBoard, 
  onAddUsersSerach, 
  onResetUsersSearch,
  onActiveBoard,
  onDesactiveActiveBoard,
  onDeleteCollaborator,
  onSuccessMessage,
  onErrorMessage,
  onClearMessages
} = projectSlice.actions;