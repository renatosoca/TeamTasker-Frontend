import { useDispatch, useSelector } from "react-redux"

export const useProject = () => {
  const dispatch = useDispatch();
  const stateProject = useSelector( state => state.project );

  return {
    ...stateProject,
    isLoadingProjects: stateProject.loading === 'loading',
    isLoadingSaveProject: stateProject.loading === 'loading Saved Project',
    isLoadingSavedBoard: stateProject.loading === 'loading Saved Board',
    isLoadingSearchUsers: stateProject.loading === 'loading Search Users',

    dispatch,
  }
}