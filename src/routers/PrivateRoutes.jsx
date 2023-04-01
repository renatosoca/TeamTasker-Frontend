import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useProject } from '../hooks'
import { startLoadingProjects } from '../store'
import { ProjectUser } from './ProjectUser'
import { ProjectWork } from './ProjectWork'
import { ProjectBoard } from './ProjectBoard'

export const PrivateRoutes = () => {
  const { projects, dispatch } = useProject();
  
  useEffect(() => {
    if ( !projects?._id ) dispatch( startLoadingProjects() );
  }, [])
  
  return (
    <Routes>
      <Route path='/u/*' element={ <ProjectUser /> } />
      <Route path='/b/*' element={ <ProjectBoard /> } />
      <Route path='/w/*' element={ <ProjectWork /> } />
    </Routes>
  )
}
