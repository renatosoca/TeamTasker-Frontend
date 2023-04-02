import { Navigate } from 'react-router-dom';
import { LoadingPage, ModalNewBoard, ModalNewCollaborator, ModalNewProject, NavBar, SideBarWork } from '../components';
import { useAuth, useProject, useUi } from '../hooks';
import { desactiveSideBarWork } from '../store';

export const ProjectBoardLayout = ({ children }) => {
  const { status, isAuthenticated, dispatch } = useAuth();
  const { activeBoard }= useProject();
  const { sideBarWork } = useUi();

  const handleDesactiveSideBarWork = () => {
    dispatch( desactiveSideBarWork() );
  }
  
  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <div className='bg-[#0D1117] text-white min-h-screen flex flex-col'>
      { isAuthenticated
        ?<>
          <NavBar location={'work'} />

          <div className='relative flex justify-start w-full h-[calc(100vh-3.2rem)] overflow-x-hidden'>
              <div className='flex-1 flex justify-center items-start w-full h-full overflow-hidden'
                style={{ 
                  backgroundColor: `${activeBoard?.background.includes('#') ? activeBoard?.background : ''}`,
                  backgroundImage: `${activeBoard?.background.includes('https') ? `url(${activeBoard?.background}`: ''}`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <SideBarWork /> 
                <main className='flex-1 flex flex-col h-full'>{ children }</main>
                <span 
                  onClick={ handleDesactiveSideBarWork } 
                  className={`absolute 2sm:block 2sm:opacity-0 2sm:select-none 2sm:pointer-events-none ${sideBarWork ? 'top-0 bottom-0 left-0 right-0 bg-black/40 z-[0] opacity-100' : '-z-50 opacity-0'} transition-all`}
                ></span>
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
