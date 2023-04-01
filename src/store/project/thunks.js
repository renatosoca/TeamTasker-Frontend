import { teamTaskeAPI } from "../../api";
import { onCloseModalNewBoard, onCloseModalNewProject } from "../ui/uiSlice";
import { onActiveBoard, onActiveProject, onAddBoard, onAddProject, onAddUsersSerach, onClearMessages, onDeleteCollaborator, onDeleteProject, onDesactiveActiveBoard, onErrorMessage, onLoadingDataProject, onLoadingProjects, onResetUsersSearch, onSuccessMessage } from "./projectSlice";

export const startLoadingProjects = () => {
  return async (dispatch) => {
    try {
      dispatch( onLoadingDataProject('loading') );

      const { data } = await teamTaskeAPI.get( 'project');
      dispatch( onLoadingProjects( data.projects ) );

    } catch (error) {
      console.log(error);
    }
  }
}
export const startLoadingProject = (id) => {
  return async (dispatch) => {
    try {
      dispatch( onLoadingDataProject('loading') );

      const { data } = await teamTaskeAPI.get( `/project/${id}`);
      dispatch( onActiveProject( data.project ) );

    } catch (error) {
      console.log(error)
    }
  }
}
export const startLoadingBoard = (id) => {
  return async (dispatch) => {
    try {
      dispatch( onLoadingDataProject('loading Board') );

      const { data } = await teamTaskeAPI.get( `/board/${id}`);
      const board = data.project.boards.find( board => board._id === id );
      dispatch( onActiveProject( data.project ) );
      dispatch( onActiveBoard( board ) );

    } catch (error) {
      console.log(error)
    }
  }
}

export const startActiveProject = (project) => {
  return async (dispatch) => {
    dispatch( onActiveProject( project ));
  }
}
export const startSavedProject = ({ name, type, description }) => {
  return async (dispatch) => {
    try {
      dispatch( onLoadingDataProject('loading Saved Project') );

      const { data } = await teamTaskeAPI.post( '/project', { name, type, description });
      dispatch( onAddProject( data.project ) );
      dispatch( onCloseModalNewProject() )

    } catch (error) {
      console.log(error);
    }
  }
}
export const startDeleteProject = () => {
  return async (dispatch, getState) => {
    try {
      dispatch( onLoadingDataProject('loading Delete Project') );
      const { activeProject } = getState().project;

      await teamTaskeAPI.delete( `/project/${activeProject._id}`);
      dispatch( onDeleteProject( activeProject._id ) );
      dispatch( onActiveProject({}) )

    } catch (error) {
      console.log(error);
    }
  }
}

export const startActiveboard = (board) => {
  return async (dispatch) => {
    dispatch( onActiveBoard( board ));
  }
}
export const startDesactiveBoard = () => {
  return async (dispatch) => {
    dispatch( onDesactiveActiveBoard() );
  }
}
export const startSavedBoard = ( project ) => {
  return async (dispatch) => {
    try {
      dispatch( onLoadingDataProject('loading Saved Board') );

      const { data } = await teamTaskeAPI.post( `/board`, project );
      dispatch( onAddBoard( data.board ) );
      dispatch( onCloseModalNewBoard() );

    } catch (error) {
      console.log(error);
    }
  }
}

export const startSearchUsers = ( username ) => {
  return async (dispatch) => {
    try {
      dispatch( onLoadingDataProject('loading Search Users') );
      dispatch( onResetUsersSearch() );
      const { data } = await teamTaskeAPI.post( `/project/search-collaborator`, username );
      dispatch( onAddUsersSerach( data.users ))

    } catch (error) {
      console.log(error);
    }
  }
}
export const startAddCollaborator = ({ _id }) => {
  return async (dispatch, getState) => {
    const { activeProject } = getState().project;

    try {
      dispatch( onLoadingDataProject('loading Add Collaborator') );
      const { data } = await teamTaskeAPI.post( `/project/add-collaborator/${activeProject._id}`, { collaboratorId: _id } );
      dispatch( onActiveProject(data.project) );
      dispatch( onSuccessMessage(data.msg) );
      setTimeout(() => {
        dispatch( onClearMessages() );
      }, 2000);

    } catch (error) {
      dispatch( onErrorMessage(error.response.data.msg) );
      setTimeout(() => {
        dispatch( onClearMessages() );
      }, 2000);
    }
  }
}
export const startDeleteCollaborator = ({ _id }) => {
  return async (dispatch, getState) => {
    const { activeProject } = getState().project;

    try {
      dispatch( onLoadingDataProject('loading Delete Collaborator') );

      const { data } = await teamTaskeAPI.post( `/project/delete-collaborator/${activeProject._id}`, { collaboratorId: _id } );
      dispatch( onDeleteCollaborator(_id) );

    } catch (error) {
      console.log(error);
    }
  }
}

