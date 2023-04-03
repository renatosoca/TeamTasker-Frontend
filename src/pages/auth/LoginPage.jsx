import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { LoadingSpinner, MessageAPI } from '../../components';
import { useAuth, useForm } from '../../hooks';
import { startLoginUser } from '../../store';
import { AuthLayout } from '../../layouts';
import { initialLoginUser, ValidationsLoginUser } from '../../data';

export const LoginPage = () => {
  const { messageAPI, isLoading, dispatch } = useAuth();
  
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
  const emailRef = useRef(null)

  const { 
    formState, isFormValid, email, password, emailValid, passwordValid, handleInputChange, handleResetForm
  } = useForm( initialLoginUser, ValidationsLoginUser );
  
  useEffect(() => {
    document.title = 'Inicio Sesión | TeamTasker';
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted( true );

    if ( !isFormValid ) return;
    dispatch( startLoginUser( formState ));
    setIsFormSubmitted( false );
    handleResetForm();
    emailRef.current.focus();
  }

  return (
    <>
      <div className="flex items-center justify-center bg-black text-white">
        <div className=" p-4 max-w-md w-full">
          <h1 className="text-5xl uppercase -skew-x-12 font-bold text-center select-none">Bienvenido</h1>

          <form
            onSubmit={ handleSubmit }
            className="leading-none flex flex-col gap-6 py-10 relative"
          >
            { !!messageAPI?.msg && <MessageAPI /> }

            <div className="w-full">
              <div className={`form__group ${(isFormSubmitted && emailValid) ? 'form__group-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                <input
                  className={`form__input ${(isFormSubmitted && emailValid)? 'form__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={email}
                  onChange={ handleInputChange }
                  ref={ emailRef }
                  autoComplete="off"
                />
                
                <label
                  htmlFor="email"
                  className={`form__label ${(isFormSubmitted && emailValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Correo</label>
              </div>

              <span className={`form__span ${(isFormSubmitted && emailValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ emailValid }</span>
            </div>

            <div className="w-full pb-4">
              <div className={`form__group ${isFormSubmitted && passwordValid ? 'form__group-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`}>

                <input
                  className={`form__input ${(isFormSubmitted && passwordValid)? 'form__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  value={password}
                  onChange={ handleInputChange }
                  autoComplete="off"
                />
                
                <label
                  htmlFor="password"
                  className={`form__label ${isFormSubmitted && passwordValid ? 'text-red-400' : 'text-gray-300'} absolute text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Contraseña</label>
              </div>

              <span className={`form__span ${(isFormSubmitted && passwordValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ passwordValid }</span>
            </div>

            <button
              className={`${isLoading ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'text-white hover:bg-blue-500'} bg-blue-600  font-medium py-4 rounded-[.2rem] text-[1.1rem] flex items-center justify-center gap-2 transition-colors`}
              type="submit"
              disabled={ isLoading }
            >
              { isLoading ? <LoadingSpinner title="Autenticando" /> : 'Iniciar sesión'}
            </button>
          </form>

          <nav className="flex flex-col items-center gap-4 font-medium">
            <Link 
              to='/auth/forgot-password' 
              className="text-blue-500 hover:text-blue-600 transition-colors" 
            >
              Olvidé mi contraseña
            </Link>

            <p className="font-normal">
              ¿No tienes una Cuenta? {''}
              <Link 
                to='/auth/register' 
                className="text-blue-500 font-medium hover:text-blue-600 transition-colors" 
              >
                Regístrate
              </Link>
            </p>
          </nav>
        </div>
      </div>

      <div className="hidden md:block h-screen">
        <div className="image__gradient-login w-full h-full"></div>
      </div>
    </>
  )
}
