import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingSpinner, MessageAPI } from '../../components';
import { useForm, useAuth } from '../../hooks';
import { AuthLayout } from '../../layouts';
import { startResetPassUser } from '../../store';

const initialForm = {
  password: '',
}

export const ResetPassPage = () => {
  const validations = {
    password: [ (value) => (value.length > 7), 'La contraseña debe tener al menos 8 caracteres' ],
  }

  const { token } = useParams();
  const { status, messageAPI, dispatch } = useAuth();
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
  
  const { 
    formState, isFormValid, password, passwordValid, handleInputChange, handleResetForm 
  } = useForm( initialForm, validations );
  
  useEffect(() => {
    document.title = 'Nueva Contraseña | TeamTasker';
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted( true );

    if ( !isFormValid ) return;
    dispatch( startResetPassUser( token, formState ))
    setIsFormSubmitted( false );
    handleResetForm();
  }
  
  return (
    <AuthLayout>
      <div className="flex items-center justify-center bg-black text-white">
        <div className=" p-4 max-w-md w-full">
          <div>
            <h1 className="text-4xl uppercase -skew-x-12 font-bold text-center pb-1 select-none">TeamTasker</h1>
            <h2 className='text-center text-xl font-medium py-4'>Digita tu nueva contraseña</h2>
          </div>

          <form
            onSubmit={ handleSubmit }
            className="relative leading-none flex flex-col gap-6 py-10"
          >

            { !!messageAPI?.msg && <MessageAPI /> }

            <div className="w-full pb-3">
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
                >Nueva contraseña</label>
              </div>

              <span className={`form__span ${(isFormSubmitted && passwordValid) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ passwordValid }</span>
            </div>

            <button
              className="bg-blue-600 text-white font-medium py-4 rounded-[.2rem] text-[1.1rem] flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
              type="submit"
            >
              { status === 'loading' ? <LoadingSpinner title="Validando" /> : 'Continuar'}
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:block h-screen">
        <div className="image__gradient-login w-full h-full"></div>
      </div>
    </AuthLayout>
  )
}
