import { IoMdAdd } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { useProject, useUi } from '../../../hooks';
import { desactiveSideBarWork, openModalNewBoard } from '../../../store';
import { SkeletonListSideBar } from '../SkeletonListSideBar';
import { ListSideBarWork } from './ListSideBarWork';

export const SideBarWork = () => {
  const { sideBarWork } = useUi();
  const { activeProject, isLoadingProjects, dispatch } = useProject();
  
  const handleClickModalNewBoard = () => {
    dispatch( openModalNewBoard() );
  }

  const handleDesactiveSideBarWork = () => {
    dispatch( desactiveSideBarWork() );
  }
  
  return (
    <aside 
      className={`absolute ${sideBarWork ? 'right-0 rounded-tl-xl rounded-bl-xl' : '-right-full'} 2sm:sticky 2sm:top-0 h-full bg-[#161B22] max-w-[18rem] 2sm:max-w-[15rem] w-full border-r-[.1rem] border-[#132F4C] text-gray-400 font-medium text-base transition-[right] ease-in-out border-l z-10`}
    >
      <nav className='w-full'>
        { isLoadingProjects
          ?<div className='pt-6'>
              <SkeletonListSideBar />
          </div>
          :<>
            <Link
              onClick={ handleDesactiveSideBarWork }
              to={`/project/w/${ activeProject?._id }`} 
              className='flex items-center gap-3 p-4 border-b-[.1rem] border-[#132F4C]'
            >
              <div className='py-2 px-4 rounded-md text-white' style={{ backgroundColor: `${activeProject?.type}`}}>
                { activeProject?.name.charAt(0).toUpperCase() }
              </div>
    
              <div>
                <h2 className='text-white'>{ activeProject?.name }</h2>
                <small className='text-gray-400'>Gratuito</small>
              </div>
            </Link>

            <ul className='flex flex-col pt-4 pb-3 gap-2 px-3 2sm:px-2'>
              <li className={`relative px-3`}>
                <NavLink
                  onClick={ handleDesactiveSideBarWork }
                  to={`/project/w/${ activeProject?._id }`}
                  end
                  className={ ({isActive}) => `block py-1 px-2 hover:bg-[#132F4C] rounded-md before:content[""] before:absolute before:top-0 before:left-0 before:bg-blue-500 ${ isActive ? 'before:w-1 before:h-full text-[#64B5F6]' : ''}`}
                >
                  Tableros
                </NavLink>
              </li>

              <li className={`relative px-3`}>
                <NavLink 
                  onClick={ handleDesactiveSideBarWork }
                  to={`/project/w/${ activeProject?._id }/collaborators`}
                  className={ ({isActive}) => `block py-1 px-2 hover:bg-[#132F4C] rounded-md before:content[""] before:absolute before:top-0 before:left-0 before:bg-blue-500 ${ isActive ? 'before:w-1 before:h-full text-[#64B5F6] hover:text-[#64B5F6]' : 'hover:text-white'}`}
                >
                  Colaboradores
                </NavLink>
              </li>

              <li className={`relative px-3`}>
                <NavLink 
                  onClick={ handleDesactiveSideBarWork }
                  to={`/project/w/${ activeProject?._id }/settings`}
                  className={ ({isActive}) => `block py-1 px-2 hover:bg-[#132F4C] rounded-md before:content[""] before:absolute before:top-0 before:left-0 before:bg-blue-500 ${ isActive ? 'before:w-1 before:h-full text-[#64B5F6] hover:text-[#64B5F6]' : 'hover:text-white'}`}
                >
                  Configuración
                </NavLink>
              </li>
            </ul>

            <div className='flex justify-between items-center pb-2 px-3 2sm:px-2'>
              <small>Tus tableros</small>

              <button
                onClick={ handleClickModalNewBoard }
                className='w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#132F4C] text-xl transition-colors'
                title='Crear Tablero'
              >
                <IoMdAdd />
              </button>
            </div>

            <ul className='flex flex-col gap-1 px-3 2sm:px-2 pb-2 max-h-[calc(100vh-19.85rem)] overflow-y-auto scrollbar'>
              <ListSideBarWork activeProject={ activeProject } />
            </ul>
          </>
        }
      </nav>
    </aside>
  )
}
