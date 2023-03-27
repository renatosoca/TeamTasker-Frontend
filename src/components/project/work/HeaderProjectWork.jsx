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
    <div className='flex justify-between items-center pt-6 pb-10 max-w-3xl w-full mx-auto'>
      <div className='flex gap-2 items-center'>
        <div className='px-5 py-2 text-5xl font-bold rounded-md text-white select-none' style={{ backgroundColor: `${activeProject?.type}` }}>
          { firstCaracterProject }
        </div>

        <div className='flex gap-4'>
          <span className='text-lg font-medium'>{ activeProject?.name }</span>

          <button
            className='text-xl p-1 rounded-md hover:bg-[#132F4C] flex items-center justify-center transition-colors'
          >
            <TbEdit />
          </button>
        </div>
      </div>

      <div>
        <button
          onClick={ handleClickNewCollaborator }
          className='flex items-center gap-2 bg-[#0d47a1]/40 px-4 py-1 rounded-md'
        >
          <FaUserPlus />
          <span>Agregar un colaborador al proyecto</span>
        </button>
      </div>
    </div>
  )
}
