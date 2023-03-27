import { Navigate } from 'react-router-dom';
import { LoadingPage, ModalNewBoard, ModalNewCollaborator, NavBar, SideBarWork } from '../components';
import { useAuth } from '../hooks';

export const ProjectLayout = ({ children }) => {
  
  const { status } = useAuth();
  
  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <div className='bg-[#0D1117] text-white min-h-screen flex flex-col'>
      <NavBar />

      { status === 'authenticated'
        ? ( 
            <div className='flex-1 flex h-full'>
              <SideBarWork /> 
              <main className='flex-1 p-6'>{ children }</main>
            </div>
          )
        : <Navigate to="/auth/login" /> 
      }
      
      <ModalNewBoard />
      <ModalNewCollaborator />

    </div>
  )
}
