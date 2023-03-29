import { Navigate } from 'react-router-dom';
import { LoadingPage, ModalNewBoard, ModalNewCollaborator, ModalNewProject, NavBar, SideBarWork } from '../components';
import { useAuth, useUi } from '../hooks';
import { desactiveSideBarWork } from '../store';

export const ProjectLayout = ({ children }) => {
  const { sideBarWork } = useUi();
  const { status, isAuthenticated, dispatch } = useAuth();

  const handleDesactiveSideBarWork = () => {
    dispatch( desactiveSideBarWork() );
  }
  
  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <div className='bg-[#0D1117] text-white min-h-screen flex flex-col'>
      { isAuthenticated
        ?<>
          <NavBar location={'work'} />

          <div className='relative w-full h-[calc(100vh-3.2rem)] overflow-y-auto flex flex-col justify-start overflow-x-hidden'>
            <div className='flex-1 flex items-center h-full overflow-y-auto'>
              <div className='flex-1 flex justify-center items-start w-full h-full overflow-y-scroll scrollbar'>
                <SideBarWork /> 
                <main className='flex-1'>{ children }</main>
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
        </>
        :<Navigate to="/auth/login" /> 
      }
    </div>
  )
}
