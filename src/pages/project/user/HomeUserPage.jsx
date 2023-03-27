import { useEffect } from 'react';
import { MdAddChart } from 'react-icons/md';
import { useProject } from '../../../hooks';
import { ProjectUserLayout } from '../../../layouts';
import { openModalNewProject } from '../../../store';

export const HomeUserPage = () => {

  const { dispatch } = useProject();
  
  useEffect(() => {
    document.title = 'Inicio | TeamTasker';
  }, []);

  const handleClick = () => {
    dispatch( openModalNewProject() );
  }
  
  return (
    <ProjectUserLayout>
      <main className='max-w-2xl py-10 px-2 md:px-8'>
        <div className='w-full border-[.1rem] border-[#132F4C] rounded-md text-center shadow overflow-hidden'>
          <div className='w-full h-40 bg-[url(https://a.trellocdn.com/prgb/assets/e55b3540e5c1f06a51d7.svg)] bg-cover bg-no-repeat bg-[center]'>
          </div>
          
          <div className='py-4 md:py-6 px-4'>
            <h2 className='font-bold text-lg pb-2 md:pb-6'>Bienvenido a Team Tasker</h2>
            <p className='text-center text-sm md:text-base'>En este espacio puede empezar a crear sus proyectos, asignar colaboradores, crear tableros, crear tareas, entre otras opciones. </p>
          </div>
        </div>
      </main>
      
      <aside className='hidden lg:block flex-1 px-2 py-10 min-w-[13rem] max-w-[16rem] text-sm'>
        <button
          onClick={ handleClick }
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
