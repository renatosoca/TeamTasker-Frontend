import { Link } from 'react-router-dom';
import { LoadingSpinner, MessageAPI } from '../../components';
import { useEffect, useState } from 'react';
import { useAuth, useForm } from '../../hooks';
import { startForgotPassUser } from '../../store';
import { initialForgotPassword, validationsForgotPassword } from '../../data';

export const ForgotPassPage = () => {
  const { isLoading, messageAPI, dispatch } = useAuth();
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);

  const {
    formState, isFormValid, email, emailValid, handleInputChange, handleResetForm 
  } = useForm( initialForgotPassword, validationsForgotPassword );
  
  useEffect(() => {
    document.title = 'Recuperar | TeamTasker';
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted( true );

    if ( !isFormValid ) return;
    dispatch( startForgotPassUser( formState ));
    setIsFormSubmitted( false );
    handleResetForm();
  }

  return (
    <div className="flex items-center justify-center text-white min-h-screen bg-[url(/assets/hero-forgot.jpg)] bg-cover bg-no-repeat bg-center">
      <div className=" p-8 max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-lg">
        <div>
          <h1 className="text-4xl uppercase -skew-x-12 font-bold text-center pb-1 select-none">TeamTasker</h1>
          <h2 className='text-center text-2xl font-medium py-4'>¿Has olvidado tu contraseña?</h2>
          <p className='text-center'>Ingresa tu correo electrónico asociada a tu cuenta y te enviaremos un enlace para restablecer la contraseña.</p>
        </div>

        <form
          onSubmit={ handleSubmit }
          className="relative leading-none flex flex-col gap-6 py-8"
        >
          { !!messageAPI?.msg && <MessageAPI /> }

          <div className="w-full pb-2">
            <div className={`inputs ${(isFormSubmitted && emailValid) ? 'inputs-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

              <input
                className={`inputs__input ${(isFormSubmitted && emailValid)? 'inputs__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                type="email"
                name="email"
                id="email"
                placeholder=" "
                value={ email }
                onChange={ handleInputChange }
                autoComplete="off"
              />
              
              <label
                htmlFor="email"
                className={`inputs__label ${(isFormSubmitted && emailValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
              >Correo</label>
            </div>

            <span className={`${(isFormSubmitted && emailValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ emailValid }</span>
          </div>

          <button
              className={`${isLoading ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'text-white hover:bg-blue-500'} bg-blue-600  font-medium py-4 rounded-[.2rem] text-[1.1rem] flex items-center justify-center gap-2 transition-colors`}
              type="submit"
              disabled={ isLoading }
          >
            { isLoading ? <LoadingSpinner title="Enviando" /> : 'Enviar instrucciones'}
          </button>
        </form>

        <nav className="flex flex-col items-center gap-2 font-medium">
          <p className="font-normal">
            ¿No tienes una cuenta? {''}
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
  )
}
