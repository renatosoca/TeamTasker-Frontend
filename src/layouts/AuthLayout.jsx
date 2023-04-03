import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';

export const AuthLayout = () => {

  const { status, user } = useAuth();

  if ( status === 'authenticated' ) return <Navigate to={`/project/u/${user?.username}`} />
  
  return (
    <div className='grid md:grid-cols-2 min-h-screen overflow-hidden'>
      <Outlet />
    </div>
  )
}
