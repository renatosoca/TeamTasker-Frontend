import { Navigate } from 'react-router-dom';
import { LoadingPage, ModalNewBoard, ModalNewProject, NavBar, SideBarUser } from '../components';
import { useAuth, useProject, useUi } from '../hooks';
import { desactiveSideBarUser } from '../store';

export const ProjectUserLayout = ({ children }) => {

  const { status, isAuthenticated, dispatch } = useAuth();
  const { loading } = useProject();
  const { sideBarUser } = useUi();

  const handleDesactiveSideBarUSer = () => {
    dispatch( desactiveSideBarUser() );
  }

  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <div className='bg-[#0D1117] text-white flex flex-col overflow-hidden'>
      { isAuthenticated
        ?<>
          <NavBar location={'user'} />

          <div className='relative w-full h-[calc(100vh-3.2rem)] overflow-y-auto flex flex-col justify-start'>
            <div className='flex-1 flex items-center h-full overflow-y-auto'>
              <div className='flex-1 flex justify-center items-start w-full h-full overflow-y-scroll scrollbar'>
                <SideBarUser /> 

                { children }
                
                <span 
                  onClick={ handleDesactiveSideBarUSer } 
                  className={`absolute 3xs:block 3xs:opacity-0 3xs:select-none 3xs:pointer-events-none ${sideBarUser ? 'top-0 bottom-0 left-0 right-0 bg-black/40 z-[0] opacity-100' : '-z-50 opacity-0'} transition-all`}
                ></span>
              </div>
            </div>
          </div>

          <ModalNewProject />
          <ModalNewBoard />
        </>
        :<Navigate to='/auth/login' /> 
      }
    </div>
  )
}
