import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth, useProject } from '../hooks'
import { startLoadingProjects } from '../store'
import { LoadingPage } from '../components'
import { ProjectBoard } from './private/ProjectBoard'
import { ProjectWork } from './private/ProjectWork'
import { ProjectUser } from './private/ProjectUser'

export const PrivateRoutes = () => {
  const { status, isAuthenticated } = useAuth();
  const { projects, dispatch } = useProject();
  
  useEffect(() => {
    if ( !projects?._id ) dispatch( startLoadingProjects() );
  }, []);

  if ( status === 'init' ) return <LoadingPage />;
  if ( !isAuthenticated ) return <Navigate to='/auth' />;
  
  return (
    <Routes>
      <Route path='/u/*' element={ <ProjectUser /> } />
      <Route path='/b/*' element={ <ProjectBoard /> } />
      <Route path='/w/*' element={ <ProjectWork /> } />
    </Routes>
  )
}
