import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export const AuthLayout = ({ children }) => {

  const { status } = useAuth()
  
  if ( status === 'authenticated' ) return <Navigate to='/project' />
  
  return (
    <div className='grid md:grid-cols-2 min-h-screen overflow-hidden'>
      { children }
    </div>
  )
}
