import { teamTaskeAPI } from "../../api";
import { onLoading, onLoadingProjects } from "./projectSlice";

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