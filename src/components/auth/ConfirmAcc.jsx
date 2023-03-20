export const ConfirmAcc = () => {
  return (
    <>
      <div className='pb-6'>
        <h1 className="text-4xl uppercase -skew-x-12 font-bold text-center pb-1 select-none">TeamTasker</h1>
        <h2 className='text-center text-2xl font-medium py-4'>Confirmación de cuenta</h2>
        <p className='text-center'>Cuenta confirmada correctamente.</p>
      </div>

      <nav className="flex flex-col items-center gap-2 font-medium ">
        <a
          href='/auth/login'
          className="text-black font-bold hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-md"
        >
          Iniciar Sesión
        </a>
      </nav>
    </>
  )
}
