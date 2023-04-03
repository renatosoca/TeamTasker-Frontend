import { Outlet } from 'react-router-dom';
import { ModalNewBoard, ModalNewCollaborator, ModalNewProject, NavBar, SideBarWork } from '../components';
import { useAuth, useProject, useUi } from '../hooks';
import { desactiveSideBarWork } from '../store';

export const ProjectWorkLayout = () => {
  const { dispatch } = useAuth();
  const { activeBoard }= useProject();
  const { sideBarWork } = useUi();

  const handleDesactiveSideBarWork = () => {
    dispatch( desactiveSideBarWork() );
  }
  
  return (
    <div className='bg-[#0D1117] text-white min-h-screen flex flex-col'>
      <NavBar location={'work'} />

      <div className='relative w-full h-[calc(100vh-3.2rem)] overflow-y-auto flex flex-col justify-start overflow-x-hidden'>
        <div className='flex-1 flex items-center h-full overflow-y-auto' >
          <div className='flex-1 flex justify-center items-start w-full h-full overflow-y-scroll scrollbar'
            style={{ 
              backgroundColor: `${activeBoard?.background.includes('#') ? activeBoard?.background : ''}`,
              backgroundImage: `${activeBoard?.background.includes('https') ? `url(${activeBoard?.background}`: ''}`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <SideBarWork /> 

            <Outlet />

            <span 
              onClick={ handleDesactiveSideBarWork } 
              className={`absolute 2sm:block 2sm:opacity-0 2sm:select-none 2sm:pointer-events-none ${sideBarWork ? 'top-0 bottom-0 left-0 right-0 bg-black/40 z-[0] opacity-100' : '-z-50 opacity-0'} transition-all`}
            ></span>
          </div>
        </div>
      </div>
    
      <ModalNewProject />
      <ModalNewBoard />
      <ModalNewCollaborator />
    </div>
  )
}
