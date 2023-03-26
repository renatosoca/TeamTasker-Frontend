import { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { useProject } from '../hooks';
import { CollaboratorsPage, ProjectsWork } from '../pages';
import { startLoadingProject } from '../store';

export const ProjectWork = () => {
  
  const { ['*']: hola } = useParams();
  const { dispatch } = useProject();
  const id = hola.split('/')[0];

  useEffect(() => {
    dispatch( startLoadingProject( id ) );
  }, [])

  return (
    <Routes>
      <Route path='/:id' element={ <ProjectsWork />} />
      <Route path='/:id/collaborators' element={ <CollaboratorsPage />} />
    </Routes>
  )
}
