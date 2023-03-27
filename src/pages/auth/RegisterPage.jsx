import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadingSpinner, MessageAPI } from '../../components';
import { useAuth, useForm } from '../../hooks';
import { AuthLayout } from '../../layouts';
import { startRegisterUser } from '../../store';



export const RegisterPage = () => {

  const { status, messageAPI, dispatch } = useAuth();

  const nameRef = useRef( null );
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
  
  const {
    formState, isFormValid, name, lastname, email, password, confirmPassword, nameValid, lastnameValid, emailValid, passwordValid, confirmPasswordValid, handleInputChange, handleResetForm 
  } = useForm( initialForm, validations );
  
  useEffect(() => {
    document.title = 'Registro | TeamTasker';
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted( true );

    if ( !isFormValid ) return;
    dispatch( startRegisterUser( formState ));
    setIsFormSubmitted( false );
    handleResetForm();
    nameRef.current.focus();
  }

  return (
    <div className='grid md:grid-cols-[1fr_2fr] min-h-screen overflow-hidden'>
      <div className="hidden md:block h-screen">
        <div className="image__gradient-register w-full h-full"></div>
      </div>

      <div className="flex items-center justify-center bg-black text-white">
        <div className=" p-4 max-w-lg w-full">
          <div>
            <h1 className="text-4xl uppercase -skew-x-12 font-bold text-center max-w-[15rem] mx-auto select-none">Únete a TeamTasker</h1>
            <p className='pt-6'>Casi listo. Para terminar de crear tu cuenta, completa los datos que faltan a continuación.</p>
          </div>

          <form
          onSubmit={ handleSubmit }
            className="relative leading-none flex flex-col gap-6 py-10"
          >

            { !!messageAPI?.msg && <MessageAPI /> }

            <div className='flex gap-6'>
              <div className="w-full">
                <div className={`form__group ${(isFormSubmitted && nameValid) ? 'form__group-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                  <input
                    className={`form__input ${(isFormSubmitted && nameValid)? 'form__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
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
                    className={`form__label ${(isFormSubmitted && nameValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                  >Nombre</label>
                </div>

                <span className={`form__span ${(isFormSubmitted && nameValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ nameValid }</span>
              </div>
              
              <div className="w-full">
                <div className={`form__group ${(isFormSubmitted && lastnameValid) ? 'form__group-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                  <input
                    className={`form__input ${(isFormSubmitted && lastnameValid)? 'form__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
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
                    className={`form__label ${(isFormSubmitted && lastnameValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                  >Apellidos</label>
                </div>

                <span className={`form__span ${(isFormSubmitted && lastnameValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ lastnameValid }</span>
              </div>
            </div>

            <div className="w-full">
              <div className={`form__group ${(isFormSubmitted && emailValid) ? 'form__group-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                <input
                  className={`form__input ${(isFormSubmitted && emailValid)? 'form__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
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
                  className={`form__label ${(isFormSubmitted && emailValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Correo</label>
              </div>

              <span className={`form__span ${(isFormSubmitted && emailValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ emailValid }</span>
            </div>

            <div className="w-full">
              <div className={`form__group ${(isFormSubmitted && passwordValid) ? 'form__group-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                <input
                  className={`form__input ${(isFormSubmitted && passwordValid)? 'form__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
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
                  className={`form__label ${(isFormSubmitted && passwordValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Contraseña</label>
              </div>

              <span className={`form__span ${(isFormSubmitted && passwordValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ passwordValid }</span>
            </div>

            <div className="w-full pb-4">
              <div className={`form__group ${(isFormSubmitted && confirmPasswordValid) ? 'form__group-error border-red-400 text-red-400 hover:border-red-500 after:bg-red-400' : 'border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0]'} relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                <input
                  className={`form__input ${(isFormSubmitted && confirmPasswordValid)? 'form__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
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
                  className={`form__label ${(isFormSubmitted && confirmPasswordValid) ? 'text-red-400' : 'text-gray-300'} absolute  text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Confirmar</label>
              </div>

              <span className={`form__span ${(isFormSubmitted && confirmPasswordValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ confirmPasswordValid }</span>
            </div>

            <button
              className="bg-blue-600 text-white font-medium py-4 rounded-[.2rem] text-[1.1rem] flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
              type="submit"
            >
              { status === 'loading' ? <LoadingSpinner title="Registrando" /> : 'Registrarse'}
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
