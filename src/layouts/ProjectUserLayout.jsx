import { Navigate } from 'react-router-dom';
import { LoadingPage, ModalNewProject, NavBar, SideBarUser } from '../components';
import { useAuth } from '../hooks';

export const ProjectUserLayout = ({ children }) => {

  const { status } = useAuth();

  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <div className='bg-[#0D1117] text-white flex flex-col overflow-hidden'>
      <NavBar />

      { status === 'authenticated'
        ? (
            <div className='relative w-full h-[calc(100vh-3rem)] overflow-y-auto flex flex-col justify-start'>
              <div className='flex-1 flex items-center h-full overflow-y-auto'>
                <div className='flex-1 flex justify-center items-start w-full h-full overflow-y-scroll'>
                  <SideBarUser /> 
                  { children }
                </div>
              </div>
            </div>
          )
        : <Navigate to='/auth/login' /> 
      }

      <ModalNewProject />

    </div>
  )
}
