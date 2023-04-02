import { useProject } from '../../../hooks';
import { FaUserPlus } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb';
import { openModalNewCollaborator, openModalNewProject, startTypeAction } from '../../../store';
import { SkeletonListSideBar } from '../SkeletonListSideBar';

export const HeaderProjectWork = () => {

  const { activeProject, dispatch } = useProject();
  const firstCaracterProject = activeProject?.name?.charAt(0).toUpperCase();

  const handleClickNewCollaborator = () => {
    dispatch( openModalNewCollaborator() )
  }
  const handleClickModalProject = () => {
    dispatch( startTypeAction('editProject'));
    dispatch( openModalNewProject() );
  }

  return (
    <div className=' border-b-2 px-2 md:px-6 py-10'>
      <div className='flex justify-between items-center gap-2 max-w-3xl w-full mx-auto'>
        {!activeProject?._id  ?
          <div className='p-4 w-[10rem] 2xs:w-[12rem] 3xs:w-[15rem] 2sm:w-[10rem] mp:w-[17rem]'><SkeletonListSideBar /></div>  :
          <div className='flex-1 flex gap-2 items-center'>
            <div 
              className='px-4 py-2 text-xl font-bold rounded-md text-white select-none' 
              style={{ backgroundColor: `${activeProject?.type}` }}
            >
              { firstCaracterProject }
            </div>

            <h2 className='items-center webkitBox webkitBox__2'>
              { activeProject?.name }
            </h2>
            
            <button
              className='text-xl py-1 px-2 rounded-md hover:bg-[#132F4C] flex items-center justify-center transition-colors border border-[#132F4C]'
              title='Editar Proyecto'
              onClick={ handleClickModalProject }
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
