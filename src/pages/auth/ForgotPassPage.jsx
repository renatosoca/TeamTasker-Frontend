import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../components';

export const ForgotPassPage = () => {
  return (
    <div className="flex items-center justify-center text-white min-h-screen image__gradient-forgot">
      <div className=" p-8 max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-lg">
        <div>
          <h1 className="text-4xl uppercase -skew-x-12 font-bold text-center pb-1 select-none">TeamTasker</h1>
          <h2 className='text-center text-2xl font-medium py-4'>¿Has olvidado tu contraseña?</h2>
          <p className='text-center'>Ingresa tu correo electrónico asociada a tu cuenta y te enviaremos un enlace para restablecer la contraseña.</p>
        </div>

        <form
          className="leading-none flex flex-col gap-6 py-8"
        >
          <div className="w-full pb-2">
            <div className="form__group relative w-full border-b-[.15rem] border-gray-400 text-gray-600 hover:border-white after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in">

              <input
                className="form__input w-full px-2 pt-3 pb-1 outline-none bg-inherit text-white font-normal resize-none"
                type="email"
                name="email"
                id="email"
                placeholder=" "
                autoComplete="off"
              />
              
              <label
                htmlFor="email"
                className="form__label absolute text-gray-300 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text"
              >Correo</label>
            </div>

            {/* <span className="form__span text-[.7rem] text-red-500 font-medium pl-2">Error</span> */}
          </div>

          <button
            className="bg-blue-600 text-white font-medium py-4 rounded-[.2rem] text-[1.1rem] flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
            type="submit"
          >
            { false ? <LoadingSpinner title="Enviando" /> : 'Enviar instrucciones'}
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