import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadingSpinner, MessageAPI } from '../../components';
import { initialRegisterUser, validationsRegisterUser } from '../../data';
import { useAuth, useForm } from '../../hooks';
import { startRegisterUser } from '../../store';

export const RegisterPage = () => {
  const { isLoading, messageAPI, dispatch } = useAuth();

  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
  const nameRef = useRef( null );
  
  const {
    formState, isFormValid, name, lastname, username, email, password, confirmPassword, nameValid, lastnameValid, usernameValid, emailValid, passwordValid, confirmPasswordValid, handleInputChange, handleResetForm 
  } = useForm( initialRegisterUser, validationsRegisterUser );
  
  useEffect(() => {
    document.title = 'Registro | TeamTasker';
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted( true );

    if ( !isFormValid ) return;
    dispatch( startRegisterUser( formState ));
    setIsFormSubmitted( false );
  }

  return (
    <div className='grid md:grid-cols-[1fr_2fr] min-h-screen overflow-hidden'>
      <div className="hidden md:block h-screen bg-[url(/assets/hero-register.jpg)] bg-cover bg-no-repeat bg-center">
        <div className="bg-gradient-to-r from-transparent from-00% via-black/50 via-70% to-black to-100% w-full h-full">
        </div>
      </div>

      <div className="flex items-center justify-center bg-black text-white">
        <div className="p-4 max-w-lg w-full">
          <div className='relative'>
            <h1 className="text-4xl uppercase -skew-x-12 font-bold text-center max-w-[15rem] mx-auto select-none">Únete a TeamTasker</h1>
            <p className='pt-6'>Casi listo. Para terminar de crear tu cuenta, completa los datos que faltan a continuación.</p>
            { !!messageAPI?.msg && <MessageAPI /> }
          </div>

          <form
            onSubmit={ handleSubmit }
            className="leading-none flex flex-col gap-6 py-10"
          >
            <div className='flex gap-6'>
              <div className="w-full">
                <div className={`inputs ${(isFormSubmitted && nameValid) ? 'inputs-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                  <input
                    className={`inputs__input ${(isFormSubmitted && nameValid)? 'inputs__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    value={ name }
                    onChange={ handleInputChange }
                    ref={ nameRef }
                    autoComplete="off"
                  />
                  
                  <label
                    htmlFor="name"
                    className={`inputs__label ${(isFormSubmitted && nameValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                  >Nombre</label>
                </div>

                <span className={`${(isFormSubmitted && nameValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ nameValid }</span>
              </div>
              
              <div className="w-full">
                <div className={`inputs ${(isFormSubmitted && lastnameValid) ? 'inputs-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                  <input
                    className={`inputs__input ${(isFormSubmitted && lastnameValid)? 'inputs__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder=" "
                    value={ lastname }
                    onChange={ handleInputChange }
                    autoComplete="off"
                  />
                  
                  <label
                    htmlFor="lastname"
                    className={`inputs__label ${(isFormSubmitted && lastnameValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                  >Apellidos</label>
                </div>

                <span className={`${(isFormSubmitted && lastnameValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ lastnameValid }</span>
              </div>
            </div>

            <div className="w-full">
              <div className={`inputs ${(isFormSubmitted && usernameValid) ? 'inputs-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                <input
                  className={`inputs__input ${(isFormSubmitted && usernameValid)? 'inputs__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                  type="text"
                  name="username"
                  id="username"
                  placeholder=" "
                  value={ username }
                  onChange={ handleInputChange }
                  ref={ nameRef }
                  autoComplete="off"
                />
                
                <label
                  htmlFor="username"
                  className={`inputs__label ${(isFormSubmitted && usernameValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Nombre de usuario</label>
              </div>

              <span className={`${(isFormSubmitted && usernameValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ usernameValid }</span>
            </div>

            <div className="w-full">
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

            <div className="w-full">
              <div className={`inputs ${(isFormSubmitted && passwordValid) ? 'inputs-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                <input
                  className={`inputs__input ${(isFormSubmitted && passwordValid)? 'inputs__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  value={ password }
                  onChange={ handleInputChange }
                  autoComplete="off"
                />
                
                <label
                  htmlFor="password"
                  className={`inputs__label ${(isFormSubmitted && passwordValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Contraseña</label>
              </div>

              <span className={`${(isFormSubmitted && passwordValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ passwordValid }</span>
            </div>

            <div className="w-full pb-4">
              <div className={`inputs ${(isFormSubmitted && confirmPasswordValid) ? 'inputs-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                <input
                  className={`inputs__input ${(isFormSubmitted && confirmPasswordValid)? 'inputs__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder=" "
                  value={ confirmPassword }
                  onChange={ handleInputChange }
                  autoComplete="off"
                />
                
                <label
                  htmlFor="confirmPassword"
                  className={`inputs__label ${(isFormSubmitted && confirmPasswordValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Confirmar</label>
              </div>

              <span className={`${(isFormSubmitted && confirmPasswordValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ confirmPasswordValid }</span>
            </div>

            <button
              className={`${isLoading ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'text-white hover:bg-blue-500'} bg-blue-600  font-medium py-4 rounded-[.2rem] text-[1.1rem] flex items-center justify-center gap-2 transition-colors`}
              type="submit"
              disabled={ isLoading }
            >
              { isLoading ? <LoadingSpinner title="Registrando" /> : 'Registrarse'}
            </button>
          </form>

          <nav className="flex flex-col items-center gap-4 font-medium">
            <p className="font-normal">
              ¿Ya tienes una cuenta? {''}
              <Link 
                to='/auth/login' 
                className="text-blue-500 font-medium hover:text-blue-600 transition-colors" 
              >
                Inicia sesión
              </Link>
            </p>
          </nav>
        </div>
      </div>
    </div>
  )
}
