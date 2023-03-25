import { onCloseModalNewProject, onOpenModalNewProject } from "./uiSlice";

export const closeModalNewProject = () => {
  return (dispatch) => {
    dispatch(onCloseModalNewProject());
  };
}

export const openModalNewProject = () => {
  return (dispatch) => {
    dispatch(onOpenModalNewProject());
  };
}