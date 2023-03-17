import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../components';
import { AuthLayout } from '../../layouts';

export const RegisterPage = () => {
  return (
    <AuthLayout>
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
            className="leading-none flex flex-col gap-6 py-10"
          >
            <div className='flex gap-6'>
              <div className="w-full">
                <div className="form__group relative w-full border-b-[.15rem] border-gray-400 text-gray-600 hover:border-white after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in">

                  <input
                    className="form__input w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none"
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    autoComplete="off"
                  />
                  
                  <label
                    htmlFor="name"
                    className="form__label absolute text-gray-300 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text"
                  >Nombre</label>
                </div>

                {/* <span className="form__span text-[.7rem] text-red-500 font-medium pl-2">Error</span> */}
              </div>
              
              <div className="w-full">
                <div className="form__group relative w-full border-b-[.15rem] border-gray-400 text-gray-600 hover:border-white after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in">

                  <input
                    className="form__input w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none"
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder=" "
                    autoComplete="off"
                  />
                  
                  <label
                    htmlFor="lastname"
                    className="form__label absolute text-gray-300 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text"
                  >Apellidos</label>
                </div>

                {/* <span className="form__span text-[.7rem] text-red-500 font-medium pl-2">Error</span> */}
              </div>
            </div>

            <div className="w-full">
              <div className="form__group relative w-full border-b-[.15rem] border-gray-400 text-gray-600 hover:border-white after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in">

                <input
                  className="form__input w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none"
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

            <div className="w-full pb-4">
              <div className="form__group relative w-full border-b-[.15rem] border-gray-400 text-gray-600 hover:border-white after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in">

                <input
                  className="form__input w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  autoComplete="off"
                />
                
                <label
                  htmlFor="password"
                  className="form__label absolute text-gray-300 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text"
                >Contraseña</label>
              </div>

              {/* <span className="form__span text-[.7rem] text-red-500 font-medium pl-2">Error</span> */}
            </div>

            <div className="w-full pb-4">
              <div className="form__group relative w-full border-b-[.15rem] border-gray-400 text-gray-600 hover:border-white after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 after:bg-[#5FA7F0] focus-within:after:scale-100 after:transition-all after:duration-300 ease-in">

                <input
                  className="form__input w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none"
                  type="password"
                  name="confirmPass"
                  id="confirmPass"
                  placeholder=" "
                  autoComplete="off"
                />
                
                <label
                  htmlFor="confirmPass"
                  className="form__label absolute text-gray-300 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text"
                >Confirmar</label>
              </div>

              {/* <span className="form__span text-[.7rem] text-red-500 font-medium pl-2">Error</span> */}
            </div>

            <button
              className="bg-blue-600 text-white font-medium py-4 rounded-[.2rem] text-[1.1rem] flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
              type="submit"
            >
              { false ? <LoadingSpinner title="Registrando" /> : 'Registrarse'}
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
    </AuthLayout>
  )
}
