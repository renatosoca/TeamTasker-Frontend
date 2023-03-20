
export const UnconfirmAcc = ({ Message }) => {
  return (
    <>
      <div className='pb-1'>
        <h1 className="text-4xl uppercase -skew-x-12 font-bold text-center pb-1 select-none">TeamTasker</h1>
        <p className='text-center text-2xl text-red-400 font-medium py-4'>¡Error de confirmación de cuenta!</p>
      </div>

      <div>
        <p className='text-center text-red-500 text-xl'>{ Message }</p>
      </div>
    </>
  )
}
