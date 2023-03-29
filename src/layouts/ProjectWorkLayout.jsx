import { Navigate } from 'react-router-dom';
import { LoadingPage, ModalNewBoard, ModalNewCollaborator, ModalNewProject, NavBar, SideBarWork } from '../components';
import { useAuth } from '../hooks';

export const ProjectLayout = ({ children }) => {
  
  const { status, isAuthenticated } = useAuth();
  
  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <div className='bg-[#0D1117] text-white min-h-screen flex flex-col'>
      { isAuthenticated
        ?<>
          <NavBar />

          <div className='flex-1 flex h-full overflow-y-auto'>
            <SideBarWork /> 
            <main className='flex-1'>{ children }</main>
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
