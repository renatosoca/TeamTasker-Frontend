import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    status: '',
    projects: [],
    project: undefined,
    activeProject: undefined,
  },
  reducers: {
    onLoading: ( state ) => {
      state.status = 'loading';
    }
  },
});

export const { onLoading } = projectSlice.actions;