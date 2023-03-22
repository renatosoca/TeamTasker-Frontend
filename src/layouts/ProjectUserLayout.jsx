import { Navigate } from 'react-router-dom';
import { LoadingPage, NavBar, SideBarUser } from '../components';
import { useAuth } from '../hooks';

export const ProjectUserLayout = ({ children }) => {

  const { status } = useAuth()
  
  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <div className='bg-[#0D1117] text-white min-h-screen flex flex-col'>
      <NavBar />

      { status === 'authenticated'
        ? ( 
            <div className='flex justify-center pt-6 px-4'>
              <SideBarUser /> 
              { children }
            </div>
          )
        : <Navigate to='/auth/login' /> 
      }

    </div>
  )
}
