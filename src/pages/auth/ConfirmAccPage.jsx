import { Link } from 'react-router-dom';

export const ConfirmAccPage = () => {
  return (
    <div className="flex items-center justify-center text-white min-h-screen image__gradient-confirm">
      <div className=" p-8 max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-lg">
        <div className='pb-6'>
          <h1 className="text-4xl uppercase -skew-x-12 font-bold text-center pb-1 select-none">TeamTasker</h1>
          <h2 className='text-center text-2xl font-medium py-4'>Confirmación de cuenta</h2>
          <p className='text-center'>Cuenta confirmada correctamente.</p>
        </div>

        <nav className="flex flex-col items-center gap-2 font-medium ">
          <Link
            to='/auth/login'
            className="text-black font-bold hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-md"
          >
            Iniciar Sesión
          </Link>
        </nav>
      </div>
    </div>
  )
}
