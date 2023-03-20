import { teamTaskeAPI } from "../../api";
import { onClearMessage, onConfirmed, onLoading, onLogin, onLogoutUser, onRegister } from "./authStore";

export const startLoginUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(onLoading());

    try {
      const { data } = await teamTaskeAPI.post( '/auth/login', { email, password });
      localStorage.setItem('authReact', data.jwt);

      dispatch( onLogin( data.user ));

    } catch (error) {
      dispatch( onLogoutUser( error.response.data ));
    }
  }
}

export const startRegisterUser = ({ name, lastname, email, password }) => {
  return async (dispatch) => {
    dispatch(onLoading());

    try {
      const { data } = await teamTaskeAPI.post( '/auth/register', { name, lastname, email, password } );
      dispatch( onRegister( data ));

    } catch (error) {
      dispatch( onLogoutUser( error.response.data ));
    }
  }
}

export const startConfirmAccount = ( token ) => {
  return async ( dispatch ) => {
    dispatch( onLoading() );

    try {
      const { data } = await teamTaskeAPI.get( `/auth/confirm-account/${token}`);
      dispatch( onConfirmed( data ));

    } catch (error) {
      dispatch( onConfirmed( error.response.data ));
    }
  }
}

export const startForgotPassUser = ({ email }) => {
  return async (dispatch) => {
    dispatch( onLoading() );

    try {
      const { data } = await teamTaskeAPI.post( '/auth/forgot-password', { email } );
      dispatch( onRegister( data ));

    } catch (error) {
      dispatch( onLogoutUser( error.response.data ));
    }
  }
}

export const startResetPassUser = ( token, { password }) => {
  return async (dispatch) => {
    dispatch(onLoading());

    try {
      const { data } = await teamTaskeAPI.post( `/auth/reset-password/${token}`, { password });
      localStorage.setItem('authReact', data.jwt);

      dispatch( onLogin( data.user ));

    } catch (error) {
      dispatch( onLogoutUser( error.response.data));
    }
  }
}

export const startClearMessage = () => {
  return (dispatch) => {
    dispatch( onClearMessage());
  }
}