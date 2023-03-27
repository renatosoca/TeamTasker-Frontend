import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export const AuthLayout = ({ children }) => {

  const { status, user } = useAuth()
  
  return (
    <>
      { status === 'authenticated' 
        ? <Navigate to={`/project/u/${user?.username}`} />
        :<div className='grid md:grid-cols-2 min-h-screen overflow-hidden'>
          { children }
        </div>
      }
    </>
  )
}
