import { Link } from 'react-router-dom';
import { CgMenuGridR, CgSearch, CgMenuRight } from 'react-icons/cg';
import { TiArrowSortedDown } from 'react-icons/ti';
import { RiAddLine } from 'react-icons/ri';

import { useNavBar } from '../../hooks';
import { SkeletonListSideBar } from './SkeletonListSideBar';
import { ListSideBar } from './user/ListSideBar';

export const NavBar = ({ location }) => {
  const { 
    showMenu, showProjects, showUserProfile, menuOptionsRef, btnMenuOptionsRef, projectsRef, btnProjectsRef, userProfileRef, btnUserProfileRef, user, sideBarUser, sideBarWork, projects, isLoadingProjects, lastURL, activeProject, handleClickModalProject, handleClickModalBoard, handleShowSideBarUser, handleToggleMenu, handleClickShowProjects, handleShowUserProfile, handleToggleSideBarWork
  } = useNavBar();

  return (
    <header className='relative w-full bg-[#161B22] border-b-[.1rem] border-[#132F4C] z-50'>
      <div className='max-w-[120rem] mx-auto flex items-center justify-between py-2 px-1 md:px-4'>
        <div className='flex gap-2 md:gap-3 items-center justify-center'>
          <div className='flex gap-1 items-center'>
            { location === 'user' && (
              <button
                onClick={ handleShowSideBarUser}
                className={`text-2xl ${sideBarUser ? 'bg-[#132F4C] 3xs:bg-inherit' : 'bg-inherit'} w-full h-full px-1 py-1 rounded-md hover:bg-[#132F4C] transition-colors 3xs:hidden border border-[#132F4C]`}
                title='Lista de Menu'
              >
                <CgMenuGridR />
              </button>
            )}

            <Link
              to={ lastURL }
              className='text-lg text-white select-none font-bold pl-1'
            >
              <h1>TeamTasker</h1>
            </Link>
          </div>  {/* END LOGO */}

          <div className='hidden xs:block relative'>
            <button
              onClick={ handleClickShowProjects }
              className={`px-2 py-[.4rem] flex gap-1 items-center text-gray-300 ${showProjects ? 'bg-[#132F4C] border-transparent': 'hover:bg-[#132F4C] border-[#132F4C]'} border-[.1rem] rounded-lg cursor-pointer transition-colors`}
              ref={ btnProjectsRef }
            >
              <span className='text-sm'>Proyectos</span>
              <TiArrowSortedDown className='text-lg' />
            </button>

            <div
              className={`absolute max-h-[90vh] ${showProjects ? 'opacity-100' : 'pointer-events-none opacity-0'} top-[135%] left-0 min-w-[15rem] max-w-[17rem] w-full border-[.15rem] border-[#132F4C] bg-[#161B22] rounded z-10 py-3 flex flex-col gap-1 transition-[opacity] ease-in-out overflow-y-auto scrollbar`}
              ref={ projectsRef }
            >
              { activeProject?._id && (
                <ul>
                  <li className='pb-2 pl-2 select-none text-sm'>Tu proyecto actual</li>
                  <ListSideBar projects={[activeProject]} handleClickShowProjects={ handleClickShowProjects } />
                </ul>
              )}

              <ul>
                <li className='pb-2 pl-2 select-none text-sm'>Tus Projectos</li>
      
                { isLoadingProjects
                  ?<SkeletonListSideBar />
                  :<ListSideBar projects={ projects } handleClickShowProjects={ handleClickShowProjects } />
                }
              </ul>
            </div>
          </div>  {/* END LIST PROJECTS */}

          <div className='2xs:relative'>
            <button
              onClick={ handleToggleMenu }
              className={` px-2 md:px-4 py-[.4rem] md:py-1 font-bold ${showMenu ? 'bg-[#0d47a1]/60 text-white' : 'bg-[#0d47a1]/30 text-[#64B5F6]'} hover:bg-[#0d47a1]/60 hover:text-white transition-colors border-[.1rem] border-[#132F4C] rounded-md`}
              ref={btnMenuOptionsRef}
              title='Crear'
            >
              <RiAddLine className='vs:hidden' />
              <span className='hidden vs:block text-sm md:text-base'>Crear</span>
            </button>

            <div
              className={`absolute py-3 ${showMenu ? 'opacity-100' : 'pointer-events-none opacity-0'} min-w-[15rem] w-full max-w-[18rem] border-[.15rem] border-[#132F4C] right-1 2xs:left-0 top-[115%] 2xs:top-[135%] bg-[#161B22] z-10 rounded-md transition-[opacity] ease-in-out`}
              ref={ menuOptionsRef }
            >
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
          </div>  {/* END LIST MENU */}
        </div>  {/* END HEADER-LEFT */}

        <div className='flex gap-2 2sm:gap-4 items-center'>
          <div className='flex items-center sm:hidden'>
            <button
              className='flex items-center justify-center px-[.375rem] py-[.375rem] text-xl rounded-md border-[.1rem] border-[#132F4C] hover:bg-[#132F4C] transition-colors'
            >
              <CgSearch />
            </button>
          </div>

          <form className='hidden sm:block'>
            <input 
              type="search"
              className='bg-[#132F4C]/40 hover:bg-[#0d47a1]/60 text-white px-3 py-1 outline-none rounded-md border-[.1rem] border-[#132F4C]'
              placeholder='Buscar...'
            />
          </form>

          <div className='relative'>
            <button
              onClick={ handleShowUserProfile }
              className={`rounded-full font-bold ${showUserProfile ? 'bg-[#0d47a1]/60' : 'bg-[#0d47a1]/30'} hover:bg-[#0d47a1]/60 border-[.15rem] border-[#132F4C] w-8 h-8 flex items-center justify-center`}
              ref={ btnUserProfileRef }
            >
              <span>{ user?.name?.charAt(0) + user?.lastname?.charAt(0) }</span>
            </button>

            <ul 
              className={`absolute ${showUserProfile ? 'opacity-100' : 'pointer-events-none opacity-0'} max-w-[14rem] min-w-[12rem] w-full border-[.15rem] border-[#132F4C] right-0 top-[145%] bg-[#161B22] z-10 rounded-md transition-[opacity] ease-in-out`}
              ref={ userProfileRef }
            >
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
          </div>  {/* END USERPROFILE */}

          { location === 'work' && (
            <button
              onClick={ handleToggleSideBarWork }
              className={`text-2xl w-full h-full px-1 py-1 rounded-md hover:bg-[#132F4C] ${sideBarWork ? 'bg-[#132F4C]' : 'bg-inherit'} transition-colors 2sm:hidden border border-[#132F4C]`}
              title='Menu de opciones'
            >
              <CgMenuRight />
            </button>
          )}
        </div>  {/* END HEADER-RIGHT */}
      </div>
    </header>
  )
}
