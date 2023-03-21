import { Navigate, Outlet } from 'react-router-dom';
import { LoadingPage, NavBar, SideBar } from '../components';
import { useAuth } from '../hooks';

export const ProjectLayout = () => {

  const { status } = useAuth()
  
  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <div className='bg-[#0D1117] text-white min-h-screen flex flex-col'>
      <NavBar />

      { status === 'authenticated'
        ? ( 
            <div className='flex-1 flex h-full'>
              <SideBar /> 
              <main className='container mx-auto'> <Outlet /> </main>
            </div>
          )
        : <Navigate to="/auth/login" /> 
      }

    </div>
  )
}
