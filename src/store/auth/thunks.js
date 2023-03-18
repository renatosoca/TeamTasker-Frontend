import { teamTaskeAPI } from "../../api";
import { onLoading, onLogin, onLogoutUser } from "./authStore";

export const startLoginUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(onLoading());

    try {
      const { data } = await teamTaskeAPI.post( '/auth/login', { email, password });
      localStorage.setItem('authReact', data.jwt);

      dispatch( onLogin( data.user ));

    } catch (error) {
      dispatch( onLogoutUser( error.response.data.msg ));
    }
  }
}

export const startRegisterUser = ({ name, email, password }) => {
  return async (dispatch) => {
    dispatch(onLoading());

    try {
      
    } catch (error) {
      console.log(error.response.data);
    }
  }
}