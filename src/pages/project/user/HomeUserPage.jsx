import { useEffect } from 'react';
import { MdAddChart } from 'react-icons/md';
import { ProjectUserLayout } from '../../../layouts';

export const HomeUserPage = () => {

  useEffect(() => {
    document.title = 'Inicio | TeamTasker';
  }, [])
  
  return (
    <ProjectUserLayout>
      <main className='max-w-md w-full py-4 px-8'>
        <div className='w-full border-[.1rem] border-[#132F4C] rounded-md text-center shadow overflow-hidden'>
          <div className='w-full'>
            <img className='w-full' src="https://a.trellocdn.com/prgb/assets/e55b3540e5c1f06a51d7.svg" alt="" />
          </div>
          <div className='p-2'>
            <h2 className='font-bold text-lg'>Bienvenido a TeamTasker</h2>
            <p className='text-center'>En este espacio puede empezar a crear sus proyecto, invitar colaboradores, asignar tareas, crear tareas, etc</p>
          </div>
        </div>
      </main>
      
      <aside className='px-2 py-4 min-w-[13rem] text-sm'>
        <button
          className='flex items-center gap-2 px-2 py-1 w-full hover:bg-[#132F4C]/80 rounded-md'
        >
          <div className='bg-[#0d47a1]/30 w-7 h-7 rounded flex justify-center items-center hover:bg-[#132F4C]'>
            <MdAddChart className='text-xl' />
          </div>
          <span>Cree un Proyecto</span>
        </button>
      </aside>
    </ProjectUserLayout>
  )
}
