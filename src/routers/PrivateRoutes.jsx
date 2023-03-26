import { useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { useProject } from '../hooks'
import { startLoadingProject, startLoadingProjects } from '../store'
import { ProjectUser } from './ProjectUser'
import { ProjectWork } from './ProjectWork'

export const PrivateRoutes = () => {
  
  const { dispatch } = useProject();
  
  useEffect(() => {
    dispatch( startLoadingProjects() );
  }, [])
  
  return (
    <Routes>
      <Route path='/u/*' element={ <ProjectUser /> } />
      <Route path='/w/*' element={ <ProjectWork /> } />
    </Routes>
  )
}
