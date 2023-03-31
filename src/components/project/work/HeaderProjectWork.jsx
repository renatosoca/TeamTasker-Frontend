import { useProject } from '../../../hooks';
import { FaUserPlus } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb';
import { openModalNewCollaborator } from '../../../store';

export const HeaderProjectWork = () => {

  const { activeProject, dispatch, isLoadingProjects } = useProject();
  const firstCaracterProject = activeProject?.name?.charAt(0).toUpperCase();

  const handleClickNewCollaborator = () => {
    dispatch( openModalNewCollaborator() )
  }

  return (
    <div className=' border-b-2 px-2 md:px-6 py-10'>
      <div className='flex justify-between items-center gap-2 max-w-3xl w-full mx-auto'>
        {isLoadingProjects  ?
          <div className='flex items-center gap-2'>
            <div className='bg-gray-600 animate-pulse w-[2.2rem] h-[2.2rem] rounded-md'></div>
            <span className='bg-gray-600 w-28 h-3 rounded-md animate-pulse'></span>
          </div>  :
          <div className='flex-1 flex gap-2 items-center'>
            <div className='px-4 py-2 text-xl font-bold rounded-md text-white select-none' style={{ backgroundColor: `${activeProject?.type}` }}>
              { firstCaracterProject }
            </div>

            <h2 className='items-center webkitBox webkitBox__2'>
              { activeProject?.name }
            </h2>
            
            <button
              className='text-xl py-1 px-2 rounded-md hover:bg-[#132F4C] flex items-center justify-center transition-colors border border-[#132F4C]'
              title='Editar Proyecto'
            >
              <TbEdit />
            </button>
          </div>
        }

        <button
          onClick={ handleClickNewCollaborator }
          className='flex items-center gap-2 bg-[#0d47a1]/40 px-3 py-2 rounded hover:bg-[#0d47a1]/60 transition-colors'
          title='Agregar Colaborador'
        >
          <FaUserPlus className='text-xl' />
          <span className='hidden vs:block xs:hidden'>Agregar</span>
          <span className='hidden xs:block 2xs:hidden'>Agregar colaborador</span>
          <span className='hidden 2xs:block text-sm md:text-base'>Agregar un colaborador al proyecto</span>
        </button> {/* END BTN ADD COLLABORATOR */}
      </div>
    </div>
  )
}
