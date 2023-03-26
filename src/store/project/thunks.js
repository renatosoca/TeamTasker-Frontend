import { teamTaskeAPI } from "../../api";
import { onAddProject, onLoading, onLoadingProjects } from "./projectSlice";

export const startLoadingProjects = () => {
  return async (dispatch) => {
    try {
      dispatch( onLoading() );

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
      dispatch( onLoading() );

      const { data } = await teamTaskeAPI.post( '/project', { name, type, description });
      dispatch( onAddProject( data.project ) );

    } catch (error) {
      console.log(error);
    }
  }
}