import { onCloseModalNewBoard, onCloseModalNewProject, onOpenModalNewBoard, onOpenModalNewProject } from "./uiSlice";

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

export const closeModalNewBoard= () => {
  return (dispatch) => {
    dispatch(onCloseModalNewBoard());
  };
}

export const openModalNewBoard = () => {
  return (dispatch) => {
    dispatch(onOpenModalNewBoard());
  };
}