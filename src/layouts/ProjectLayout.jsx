import { Navigate } from 'react-router-dom';
import { LoadingPage } from '../components';
import { useAuth } from '../hooks';

export const ProjectLayout = ({ children }) => {

  const { status } = useAuth()
  
  if ( status === 'init' ) return <LoadingPage />;
  
  return (
    <>
      <h1>Project</h1>

      { status === 'authenticated'
        ? children 
        : <Navigate to="/auth/login" /> 
      }

      <h2>Fin project</h2>
    </>
  )
}
