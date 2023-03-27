import { teamTaskeAPI } from "../../api";
import { onCloseModalNewBoard, onCloseModalNewProject } from "../ui/uiSlice";
import { onActiveProject, onAddBoard, onAddProject, onLoading, onLoadingProjects } from "./projectSlice";

export const startLoadingProjects = () => {
  return async (dispatch) => {
    try {
      dispatch( onLoading('loading') );

      const { data } = await teamTaskeAPI.get( 'project');
      dispatch( onLoadingProjects( data.projects ) );

    } catch (error) {
      console.log(error);
    }
  }
}

export const startSavedProject = ({ name, type, description }) => {
  return async (dispatch) => {
    try {
      dispatch( onLoading('loading Saved Project') );

      const { data } = await teamTaskeAPI.post( '/project', { name, type, description });
      dispatch( onAddProject( data.project ) );
      dispatch( onCloseModalNewProject() )

    } catch (error) {
      console.log(error);
    }
  }
}

export const startLoadingProject = (id) => {
  return async (dispatch) => {
    try {
      dispatch( onLoading('loading Project') );

      const { data } = await teamTaskeAPI.get( `/project/${id}`);
      dispatch( onActiveProject( data.project ) );

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

export const startSavedBoard = ( project ) => {
  return async (dispatch) => {
    try {
      dispatch( onLoading('loading Saved Board') );

      const { data } = await teamTaskeAPI.post( `/board`, project );
      console.log(data)
      dispatch( onAddBoard( data.board ) );
      dispatch( onCloseModalNewBoard() );

    } catch (error) {
      console.log(error);
    }
  }
}