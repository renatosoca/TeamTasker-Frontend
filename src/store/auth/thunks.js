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

export const startRegisterUser = ({ name, lastname, email, password }) => {
  return async (dispatch) => {
    dispatch(onLoading());

    try {
      const { data } = await teamTaskeAPI.post( '/auth/register', { name, lastname, email, password } );
      console.log(data);
      //Falta un dispatch
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export const startForgotPassUser = ({ email }) => {
  return async (dispatch) => {
    dispatch( onLoading() );

    try {
      const { data } = await teamTaskeAPI.post( '/auth/forgot-password', { email } );
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
}