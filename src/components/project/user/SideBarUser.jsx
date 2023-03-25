import { Link, NavLink } from 'react-router-dom';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import { useAuth, useModal } from '../../../hooks';
import { openModalNewProject } from '../../../store';

export const SideBarUser = () => {
  
  const { dispatch } = useModal();
  const { user } = useAuth()
  
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
          <div className='flex justify-between items-center pl-2 pb-3'>
            <small>Projectos</small>
            <button
              className='w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#132F4C] text-xl transition-colors'
              title='Crear Proyecto'
              onClick={ () => dispatch( openModalNewProject() ) }
            >
              <IoMdAdd />
            </button>
          </div>

          <li>
            <Link
              to='/w/1'
              className='flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded transition-colors'
            >
              <div className='bg-black px-3 py-1 rounded-md'>P</div>
              <span>
                Project 1
              </span>
            </Link>
          </li>

          <li>
            <Link
              to='/w/1'
              className='flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded transition-colors'
            >
              <div className='bg-black px-3 py-1 rounded-md'>P</div>
              <span>
                Project 2
              </span>
            </Link>
          </li>

          <li>
            <Link
              to='/w/1'
              className='flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded transition-colors'
            >
              <div className='bg-black px-3 py-1 rounded-md'>P</div>
              <span>
                Project 3
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
