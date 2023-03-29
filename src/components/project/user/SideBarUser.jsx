import { Link, NavLink } from 'react-router-dom';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';

import { useAuth, useProject, useUi } from '../../../hooks';
import { desactiveSideBarUser, openModalNewProject } from '../../../store';
import { SkeletonListSideBar } from '../SkeletonListSideBar';
import { ListSideBar } from './ListSideBar';

export const SideBarUser = () => {
  
  const { user } = useAuth();
  const { projects, isLoadingProjects, dispatch } = useProject();
  const { sideBarUser } = useUi();

  const handleClickModalNewProject = () => {
    dispatch( openModalNewProject() );
  }

  const handleDesactiveSideBarUSer = () => {
    dispatch( desactiveSideBarUser() );
  }

  return (
    <aside
      className={`absolute ${sideBarUser ? 'left-0 rounded-tr-xl rounded-br-xl' : '-left-full'} transition-[left] bg-[#0A1929] 3xs:bg-inherit 3xs:sticky top-0 text-gray-300 font-medium text-base px-4 pt-6 h-full w-full max-w-[16rem] min-w-[14rem] z-50 3xs:z-0`}
    >
      <nav className=''>
        <ul className='flex flex-col py-4 gap-2'>
          <li>
            <NavLink
              onClick={ handleDesactiveSideBarUSer }
              to={`/project/u/${user?.username}`}
              end
              className={ ({isActive}) => `flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded-md ${ isActive ? ' bg-[#132F4C]/40 text-[#64B5F6]' : ''}`}
            >
              <AiOutlineFundProjectionScreen />
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink 
              onClick={ handleDesactiveSideBarUSer }
              to={`/project/u/${user?.username}/boards`}
              className={ ({isActive}) => `flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded-md ${ isActive ? ' bg-[#132F4C]/40 text-[#64B5F6]' : ''}`}
            >
              <GoProject />
              Proyectos
            </NavLink>
          </li>
        </ul>

        <div className='flex justify-between items-center pb-3'>
          <small className='select-none'>Projectos</small>
          <button
            className='w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#132F4C] text-xl transition-colors'
            title='Crear Proyecto'
            onClick={ handleClickModalNewProject }
          >
            <IoMdAdd />
          </button>
        </div>

        <div className=''>
          <ul className='flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-13.7rem)] pb-4 scrollbar'>
            { isLoadingProjects
              ?( <SkeletonListSideBar /> )
              :<ListSideBar projects={ projects } />
            }
          </ul>
        </div>
      </nav>
    </aside>
  )
}
