import { Link, NavLink } from 'react-router-dom';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import { useAuth, useProject, useUi } from '../../../hooks';
import { openModalNewProject } from '../../../store';

export const SideBarUser = () => {
  
  const { dispatch } = useUi();
  const { user } = useAuth();
  const { projects, loading } = useProject();
  return (
    <aside className='sticky top-0 text-gray-300 font-medium text-base px-4 h-full w-full max-w-[16rem] min-w-[14rem]'>
      <nav className=''>
        <ul className='flex flex-col py-4 gap-2'>
          <li>
            <NavLink 
              to={`/u/${user?.name}`}
              end
              className={ ({isActive}) => `flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded-md ${ isActive ? ' bg-[#132F4C]/40 text-[#64B5F6]' : ''}`}
            >
              <AiOutlineFundProjectionScreen />
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={`/u/${user?.name}/boards`}
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

          { loading === 'loading' && ( 
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2 px-2'>
                <div className='bg-gray-600 animate-pulse w-[2.2rem] h-[2.2rem] rounded-md'></div>
                <div className='bg-gray-600 animate-pulse h-[.1rem] py-2 rounded-md w-[60%]'></div>
              </div>
              <div className='flex items-center gap-2 px-2'>
                <div className='bg-gray-600 animate-pulse w-[2.2rem] h-[2.2rem] rounded-md'></div>
                <div className='bg-gray-600 animate-pulse h-[.1rem] py-2 rounded-md w-[60%]'></div>
              </div>
              <div className='flex items-center gap-2 px-2'>
                <div className='bg-gray-600 animate-pulse w-[2.2rem] h-[2.2rem] rounded-md'></div>
                <div className='bg-gray-600 animate-pulse h-[.1rem] py-2 rounded-md w-[60%]'></div>
              </div>
            </div>
          )}

          { loading === 'success' && projects?.map( ({ _id, name, type }) => (
            <li key={ _id }>
              <Link
                to={`/w/${ _id }`}
                className='flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded transition-colors'
              >
                <div className={`bg-[${ type }] px-3 py-1 rounded-md`}>{ name?.charAt(0).toUpperCase() }</div>
                <span>{ name }</span>
              </Link>
            </li>
          )) }
        </ul>
      </nav>
    </aside>
  )
}
