import { Link, NavLink } from 'react-router-dom';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import { useAuth, useProject, useUi } from '../../../hooks';
import { openModalNewProject, startActiveProject } from '../../../store';
import { SkeletonListSideBar } from '../SkeletonListSideBar';

export const SideBarUser = () => {
  
  const { user } = useAuth();
  const { projects, loading, dispatch } = useProject();

  return (
    <aside className='sticky top-0 text-gray-300 font-medium text-base px-4 h-full w-full max-w-[16rem] min-w-[14rem]'>
      <nav className=''>
        <ul className='flex flex-col py-4 gap-2'>
          <li>
            <NavLink 
              to={`/project/u/${user?.name}`}
              end
              className={ ({isActive}) => `flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded-md ${ isActive ? ' bg-[#132F4C]/40 text-[#64B5F6]' : ''}`}
            >
              <AiOutlineFundProjectionScreen />
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={`/project/u/${user?.name}/boards`}
              className={ ({isActive}) => `flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded-md ${ isActive ? ' bg-[#132F4C]/40 text-[#64B5F6]' : ''}`}
            >
              <GoProject />
              Proyectos
            </NavLink>
          </li>
        </ul>

        <ul className='flex flex-col gap-1'>
          <div className='flex justify-between items-center pb-3'>
            <small className='select-none'>Projectos</small>
            <button
              className='w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#132F4C] text-xl transition-colors'
              title='Crear Proyecto'
              onClick={ () => dispatch( openModalNewProject() ) }
            >
              <IoMdAdd />
            </button>
          </div>

          { loading === 'loading' ?
            ( <SkeletonListSideBar /> ) :
            <>
              { projects?.map( (project) => (
                <li key={ project._id }>
                  <Link
                    onClick={ () => dispatch( startActiveProject( project ) )}
                    to={`/project/w/${ project._id }`}
                    className='flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded transition-colors'
                  >
                    <div className={`bg-[${ project.type }] px-3 py-1 rounded-md`} style={{ background: `${project.type}` }}>{ project.name?.charAt(0).toUpperCase() }</div>
                    <span>{ project.name }</span>
                  </Link>
                </li>
              )) }
            </>
          }
          
        </ul>
      </nav>
    </aside>
  )
}
