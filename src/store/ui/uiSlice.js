import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    modalNewProject: false,
    modalNewBoard: false,
    modalNewCollaborator: false,
  },
  reducers: {
    onOpenModalNewProject: (state) => {
      state.modalNewProject = true;
    },
    onCloseModalNewProject: (state) => {
      state.modalNewProject = false;
    },
    onOpenModalNewBoard: (state) => {
      state.modalNewBoard = true;
    },
    onCloseModalNewBoard: (state) => {
      state.modalNewBoard = false;
    },
    onOpenModalNewCollaborator: (state) => {
      state.modalNewCollaborator = true;
    },
    onCloseModalNewCollaborator: (state) => {
      state.modalNewCollaborator = false;
    }
  },
});

export const { 
  onOpenModalNewProject,
  onCloseModalNewProject,
  onOpenModalNewBoard,
  onCloseModalNewBoard,
  onOpenModalNewCollaborator,
  onCloseModalNewCollaborator,
} = uiSlice.actions;