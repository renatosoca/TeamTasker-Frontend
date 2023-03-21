import React from 'react'

export const NavBar = () => {
  return (
    <header className='w-full bg-[#161B22] border-b-[.1rem] border-[#132F4C]'>
      <div className='container mx-auto flex items-center justify-between text-[#64B5F6] py-4'>
        <div className='flex gap-3 items-center justify-center'>
          <div className='text-2xl text-white select-none font-bold'>
            <h1>TeamTasker</h1>
          </div>

          <button
            className='px-4 py-1 font-bold bg-[#0d47a1]/30 hover:bg-[#0d47a1]/60 hover:text-white transition-colors border-[.1rem] border-[#132F4C] rounded-md'
          >
            Crear
          </button>
        </div>  {/* END HEADER-LEFT */}

        <div className='flex gap-3 items-center'>
          <form>
            <input 
              type="search"
              className='bg-[#132F4C]/40 text-white px-3 py-1 outline-none rounded-md border-[.1rem] border-[#132F4C]'
              placeholder='Buscar...'
            />
          </form>

          <div className='rounded-full bg-slate-600 w-8 h-8 flex items-center justify-center'>
            LR
          </div>
        </div>
      </div>
    </header>
  )
}
