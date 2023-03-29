import { useProject } from '../../../hooks';
import { FaUserPlus } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb';
import { openModalNewCollaborator } from '../../../store';

export const HeaderProjectWork = () => {

  const { activeProject, dispatch } = useProject();
  const firstCaracterProject = activeProject?.name.charAt(0).toUpperCase();

  const handleClickNewCollaborator = () => {
    dispatch( openModalNewCollaborator() )
  }

  return (
    <div className=' border-b-2 px-2 md:px-6 py-10'>
      <div className='flex justify-between items-center gap-1 max-w-3xl w-full mx-auto'>
        <div className='flex gap-2 items-center'>
          <div className='px-4 py-2 text-xl font-bold rounded-md text-white select-none' style={{ backgroundColor: `${activeProject?.type}` }}>
            { firstCaracterProject }
          </div>

          <div className='flex gap-2 items-center'>
            <span className='text-lg font-medium'>{ activeProject?.name }</span>
            <button
              className='text-xl py-1 px-2 rounded-md hover:bg-[#132F4C] flex items-center justify-center transition-colors border border-[#132F4C]'
              title='Editar Proyecto'
            >
              <TbEdit />
            </button>
          </div>
        </div>

        <div>
          <button
            onClick={ handleClickNewCollaborator }
            className='flex items-center gap-2 bg-[#0d47a1]/40 px-2 py-2 rounded-md'
            title='Agregar Colaborador'
          >
            <FaUserPlus className='text-xl' />
            <span className='hidden vs:block xs:hidden'>Agregar</span>
            <span className='hidden xs:block 2xs:hidden'>Agregar colaborador</span>
            <span className='hidden 2xs:block text-sm md:text-base'>Agregar un colaborador al proyecto</span>
          </button>
        </div>  {/* END BTN ADD COLLABORATOR */}
      </div>
    </div>
  )
}
