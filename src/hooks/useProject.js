import { useDispatch, useSelector } from "react-redux"

export const useProject = () => {
  const dispatch = useDispatch();
  const stateProject = useSelector( state => state.project );

  return {
    ...stateProject,
    isLoadingProjects: stateProject.loading === 'loading',

    dispatch,
  }
}