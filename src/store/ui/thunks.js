import { onCloseModalNewBoard, onCloseModalNewCollaborator, onCloseModalNewProject, onOpenModalNewBoard, onOpenModalNewCollaborator, onOpenModalNewProject } from "./uiSlice";

export const closeModalNewProject = () => {
  return (dispatch) => {
    dispatch(onCloseModalNewProject());
  }
}
export const openModalNewProject = () => {
  return (dispatch) => {
    dispatch(onOpenModalNewProject());
  }
}

export const closeModalNewBoard= () => {
  return (dispatch) => {
    dispatch(onCloseModalNewBoard());
  }
}
export const openModalNewBoard = () => {
  return (dispatch) => {
    dispatch(onOpenModalNewBoard());
  }
}

export const closeModalNewCollaborator = () => {
  return (dispatch) => {
    dispatch(onCloseModalNewCollaborator());
  }
}
export const openModalNewCollaborator = () => {
  return (dispatch) => {
    dispatch( onOpenModalNewCollaborator() );
  }
}