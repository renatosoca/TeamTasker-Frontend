import { onCloseModalNewBoard, onCloseModalNewCollaborator, onCloseModalNewProject, onDesactiveSideBarUser, onOpenModalNewBoard, onOpenModalNewCollaborator, onOpenModalNewProject, ontoggleSideBarUser } from "./uiSlice";

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

export const toggleSideBarUser = () => {
  return (dispatch) => {
    dispatch(ontoggleSideBarUser());
  }
}
export const desactiveSideBarUser = () => {
  return (dispatch) => {
    dispatch(onDesactiveSideBarUser());
  }
}