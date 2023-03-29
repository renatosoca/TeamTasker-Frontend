import { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { useProject } from '../hooks';
import { CollaboratorsPage, ProjectsWork, SettingsPage } from '../pages';
import { startLoadingProject } from '../store';

export const ProjectWork = () => {
  
  const { ['*']: hola } = useParams();
  const { dispatch, activeProject } = useProject();
  const id = hola.split('/')[0];

  useEffect(() => {
    if ( !activeProject._id ) dispatch( startLoadingProject( id ) );
  }, []);

  return (
    <Routes>
      <Route path='/:id' element={ <ProjectsWork />} />
      <Route path='/:id/collaborators' element={ <CollaboratorsPage />} />
      <Route path='/:id/settings' element={ <SettingsPage />} />
    </Routes>
  )
}
