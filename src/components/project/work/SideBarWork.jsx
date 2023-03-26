import { IoMdAdd } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { useProject } from '../../../hooks';
import { SkeletonListSideBar } from '../SkeletonListSideBar';

export const SideBarWork = () => {

  const { activeProject, loading } = useProject();
  
  return (
    <aside className='bg-[#161B22] max-w-[15rem] w-full border-r-[.1rem] border-[#132F4C] text-gray-400 font-medium text-base'>
      <nav className=''>
        <Link to={`/w/${ activeProject?._id }`} className='flex items-center gap-3 p-4 border-b-[.1rem] border-[#132F4C]'>
          <div className='py-2 px-4 bg-slate-600 rounded-md text-gray-300'>{ activeProject?.name.charAt(0).toUpperCase() }</div>
          <div>
            <h2>{ activeProject?.name }</h2>
            <small className='text-gray-300'>Gratuito</small>
          </div>
        </Link>

        { loading === 'loading' ?
          <>
            <div className='pt-6'><SkeletonListSideBar /></div>
          </> :
          <>
            <ul className='flex flex-col py-4 gap-4 px-1'>
              <li className={`relative px-3`}>
                <NavLink 
                  to={`/w/${ activeProject?._id }`}
                  end
                  className={ ({isActive}) => `block py-1 px-2 hover:bg-[#132F4C] rounded-md before:content[""] before:absolute before:top-0 before:left-0 before:bg-blue-500 ${ isActive ? 'before:w-1 before:h-full text-[#64B5F6]' : ''}`}
                >
                  Tablero
                </NavLink>
              </li>

              <li className={`relative px-3`}>
                <NavLink 
                  to={`/w/${ activeProject?._id }/collaborators`}
                  className={ ({isActive}) => `block py-1 px-2 hover:bg-[#132F4C] rounded-md before:content[""] before:absolute before:top-0 before:left-0 before:bg-blue-500 ${ isActive ? 'before:w-1 before:h-full text-[#64B5F6]' : ''}`}
                >
                  Miembros
                </NavLink>
              </li>
            </ul>

            <ul className='flex flex-col gap-1 px-1'>
              <div className='flex justify-between items-center pl-2 pb-3'>
                <small>Tus tableros</small>
                <button
                  className='w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#132F4C] text-xl transition-colors'
                  title='Crear Tablero'
                >
                  <IoMdAdd />
                </button>
              </div>

                  {  activeProject?.boards.map( ({ _id, title }) => (
                    <li key={ _id }>
                      <Link
                        to='/w/1'
                        className='flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded transition-colors'
                      >
                        <div className='bg-black px-3 py-1 rounded-md'>{ title?.charAt(0).toUpperCase() }</div>
                        <span>{ title }</span>
                      </Link>
                    </li>
                  ))}

            </ul>
          </>
        }
        
      </nav>
    </aside>
  )
}
