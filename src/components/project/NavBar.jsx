import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuGridR, CgSearch } from 'react-icons/cg';
import { TiArrowSortedDown } from 'react-icons/ti';

import { useAuth, useProject } from '../../hooks';
import { openModalNewBoard, openModalNewProject, toggleSideBarUser } from '../../store';
import { SkeletonListSideBar } from './SkeletonListSideBar';
import { ListSideBar } from './user/ListSideBar';

export const NavBar = () => {
  const { user, dispatch } = useAuth();
  const { projects, isLoadingProjects } = useProject();
  const [ showMenu, setShowMenu ] = useState(false);
  const [ showProjects, setShowProjects ] = useState(false);
  const [ showUserProfile, setShowUserProfile ] = useState(false);
  const optionsRef = useRef(null);
  const btnOptionsRef = useRef(null);

  useEffect(() => {
    function handleClickHiddenOptions({ target }) {
      const { current } = optionsRef;
      const { current: btnCurrent } = btnOptionsRef;
      const isHidden = current && !current.contains(target) && !btnCurrent.contains(target);

      if (isHidden) setShowMenu(false);
    }
    document.addEventListener("mousedown", handleClickHiddenOptions);
    return () => {
      document.removeEventListener("mousedown", handleClickHiddenOptions);
    }
  }, [ optionsRef, btnOptionsRef ])

  const handleToogleMenu = () => {
    setShowMenu(!showMenu);
    setShowProjects(false);
  }

  const handleClickModalProject = () => {
    dispatch( openModalNewProject() );
    setShowMenu(false);
  }

  const handleClickModalBoard = () => {
    dispatch( openModalNewBoard() );
    setShowMenu(false);
  }

  const handleClickShowProjects = () => {
    setShowProjects(!showProjects);
    setShowMenu(false);
  }

  const handleShowSideBarUser = () => {
    dispatch( toggleSideBarUser() );
  }

  const handleShowUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  }

  return (
    <header className='relative w-full bg-[#161B22] border-b-[.1rem] border-[#132F4C] z-50'>
      <div className='max-w-[120rem] mx-auto flex items-center justify-between py-2 px-1 md:px-4'>
        <div className='flex gap-2 md:gap-3 items-center justify-center'>
          <div className='flex gap-1 items-center'>
            <button
              onClick={ handleShowSideBarUser}
              className='text-2xl w-full h-full px-1 py-1 rounded-md hover:bg-[#132F4C] transition-colors'
              title='Lista de Menu'
            >
              <CgMenuGridR className=''/>
            </button>

            <Link
              to={`/project/u/${ user?.username }`}
              className='text-lg text-white select-none font-bold pl-1'
            >
              <h1>TeamTasker</h1>
            </Link>
          </div>  {/* END LOGO AND MENU */}

          <div className='flex gap-1'>
            <div className='hidden xs:block md:relative'>
              <button
                onClick={ handleClickShowProjects}
                className={`px-2 py-[.4rem] flex gap-1 items-center text-gray-300 ${showProjects ? 'bg-[#132F4C] border-transparent': 'hover:bg-[#132F4C] border-[#132F4C]'} border-[.1rem] rounded-lg cursor-pointer transition-colors`}
                ref={ btnOptionsRef }
              >
                <span className='text-sm'>Proyectos</span>
                <TiArrowSortedDown className='text-lg' />
              </button>

              {showProjects && (
                <ul className='absolute top-[115%] right-1 min-w-[10rem] max-w-[18rem] w-full border-[.15rem] border-[#132F4C] bg-[#161B22] rounded z-10 py-3 flex flex-col gap-1'>
                  <div className='flex justify-between items-center pb-2 pl-2'>
                    <small className='select-none'>Tus Projectos</small>
                  </div>
        
                  { isLoadingProjects
                    ?<SkeletonListSideBar />
                    :<ListSideBar projects={ projects } />
                  }
                </ul>
              )}
            </div>  {/* END LIST PROJECTS */}
          </div>

          <div className='md:relative'>
            <button
              onClick={ handleToogleMenu }
              className={` px-2 md:px-4 py-1 font-bold ${showMenu ? 'bg-[#0d47a1]/60 text-white' : 'bg-[#0d47a1]/30 text-[#64B5F6]'} hover:bg-[#0d47a1]/60 hover:text-white transition-colors border-[.1rem] border-[#132F4C] rounded-md`}
              ref={btnOptionsRef}
              title='Crear'
            >
              <span className='text-sm md:text-base'>Crear</span>
            </button>

            {showMenu && (
              <div className='absolute top-[115%] right-2 min-w-[10rem] max-w-[18rem] w-full border-[.15rem] border-[#132F4C] bg-[#161B22] rounded z-10 py-3' ref={ optionsRef }>
                <button
                  onClick={ handleClickModalProject }
                  className='px-3 py-2 hover:bg-[#0d47a1]/30 text-start transition-colors'
                >
                  <h2>Crear un proyecto</h2>
                  <p className='text-xs text-gray-400'>Un projecto es un conjunto de tableros y colaboradores, utilizalo para organizar tus tableros, proyectos, etc.</p>
                </button>

                <button
                  onClick={ handleClickModalBoard }
                  className='px-3 py-1 hover:bg-[#0d47a1]/30 text-start'
                >
                  <h2>Crear un Tablero</h2>
                  <p className='text-xs text-gray-400'>Un tablero es un conjunto de tareas ordenadas, utilízalo para hacer seguimientos de tus proyectos, etc</p>
                </button>
              </div>
            )}
          </div>  {/* END LIST CREATE BOARD AND PROJECT */}
        </div>  {/* END HEADER-LEFT */}

        <div className='flex gap-3 items-center'>
          <div className='flex items-center'>
            <button
              className='flex items-center justify-center px-[.375rem] py-[.375rem] text-xl rounded-md border-[.1rem] border-[#132F4C] hover:bg-[#132F4C] transition-colors'
            >
              <CgSearch />
            </button>
          </div>

          <form className='hidden'>
            <input 
              type="search"
              className='bg-[#132F4C]/40 hover:bg-[#0d47a1]/60 text-white px-3 py-1 outline-none rounded-md border-[.1rem] border-[#132F4C]'
              placeholder='Buscar...'
            />
          </form>

          <div>
            <button
              onClick={ handleShowUserProfile }
              className='rounded-full font-bold bg-[#0d47a1]/30 hover:bg-[#0d47a1]/60 border-[.15rem] border-[#132F4C] w-8 h-8 flex items-center justify-center'
            >
              <span>{ user?.name.charAt(0) + user?.lastname.charAt(0) }</span>
            </button>

            { showUserProfile && (
              <ul className='absolute max-w-[14rem] min-w-[12rem] w-full right-1 top-[115%] bg-[#161B22] z-10 rounded-md border-[.15rem] border-[#132F4C]'>
                <li className='border-b-2 border-gray-500'>
                  <div className='p-3'>
                    <h2>Cuenta</h2>
                    <div className='flex gap-2 items-center pt-3 pb-2 select-none'>
                      <div className='rounded-full font-bold bg-slate-600 w-10 h-10 flex items-center justify-center'>
                        { user?.name.charAt(0) + user?.lastname.charAt(0) }
                      </div>

                      <div className='flex flex-col'>
                        <div className=' text-sm'>{ user?.name + ' ' + user?.lastname }</div>
                        <small className='text-gray-400'>{ user?.email}</small>
                      </div>
                    </div>
                  </div>
                </li> {/* END HEADER USERPROFILE */}

                <li className='py-2'>
                  <button className='block px-3 py-1 w-full text-start hover:bg-[#132F4C] transition-colors'>
                    Perfil
                  </button>
                  <button className='block px-3 py-1 w-full text-start hover:bg-[#132F4C] transition-colors'>
                    Cambiar contraseña
                  </button>
                </li> {/* END BODY USERPROFILE */}

                <li className='py-2 border-t-2 border-gray-500'>
                <button className='block px-3 py-1 w-full text-start hover:bg-red-400 transition-colors'>
                    Cerrar sesión
                  </button>
                </li> {/* END FOOTER USERPROFILE */}
              </ul>
            )}
          </div>  {/* END USERPROFILE */}
        </div>  {/* END HEADER-RIGHT */}
      </div>
    </header>
  )
}
