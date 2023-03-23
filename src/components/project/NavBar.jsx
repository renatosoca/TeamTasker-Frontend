import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks'

export const NavBar = () => {

  const { user } = useAuth()
  return (
    <header className='w-full bg-[#161B22] border-b-[.1rem] border-[#132F4C]'>
      <div className='container mx-auto flex items-center justify-between text-[#64B5F6] py-4'>
        <div className='flex gap-3 items-center justify-center'>
          <Link
            to={`/u/${ user.name }`}
            className='text-2xl text-white select-none font-bold'
          >
            TeamTasker
          </Link>

          <div className='flex gap-1'>
            <button className='px-2 py-1 flex gap-1 items-center text-gray-300 hover:bg-[#132F4C] rounded-lg cursor-pointer transition-colors'>
              Espacios de trabajo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <button className='px-2 py-1 flex gap-1 items-center text-gray-300 hover:bg-[#132F4C] rounded-lg cursor-pointer transition-colors'>
              Favoritos
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
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
