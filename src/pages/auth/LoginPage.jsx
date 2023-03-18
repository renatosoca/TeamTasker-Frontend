import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../components';
import { useForm } from '../../hooks';

const initialForm = {
  email: '',
  password: '',
}

export const LoginPage = () => {
  const FormValidations = {
    email: [ (value) => value.length > 0, 'Ingrese un email válido' ],
    password: [ (value) => value.length > 7, 'Ingrese un mínimo de 8 caracteres' ],
  }

  const { formState, email, password, emailValid, passwordValid, handleInputChange } = useForm( initialForm, FormValidations );
  return (
    <div className='grid md:grid-cols-2 min-h-screen overflow-hidden'>
      <div className="flex items-center justify-center bg-black text-white">
        <div className=" p-4 max-w-md w-full">
          <h1 className="text-5xl uppercase -skew-x-12 font-bold text-center select-none">Bienvenido</h1>

          <form
            className="leading-none flex flex-col gap-6 py-10"
          >
            <div className="w-full">
              <div className="form__group relative w-full border-b-[.15rem] border-gray-400 text-gray-600 hover:border-white after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in">

                <input
                  className="form__input w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={email}
                  onChange={ handleInputChange }
                  autoComplete="off"
                />
                
                <label
                  htmlFor="email"
                  className="form__label absolute text-gray-300 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text"
                >Correo</label>
              </div>

              { <span className="form__span text-[.7rem] text-red-500 font-medium pl-2">{ emailValid }</span>}
            </div>

            <div className="w-full pb-4">
              <div className="form__group relative w-full border-b-[.15rem] border-gray-400 text-gray-600 hover:border-white after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in">

                <input
                  className="form__input w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none"
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
                  className="form__label absolute text-gray-300 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text"
                >Contraseña</label>
              </div>

              {/* <span className="form__span text-[.7rem] text-red-500 font-medium pl-2">Error</span> */}
            </div>

            <button
              className="bg-blue-600 text-white font-medium py-4 rounded-[.2rem] text-[1.1rem] flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
              type="submit"
            >
              { false ? <LoadingSpinner title="Autenticando" /> : 'Iniciar sesión'}
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
    </div>
  )
}