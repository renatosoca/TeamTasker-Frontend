import { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { useProject } from '../hooks';
import { CollaboratorsPage, ProjectsWork, SettingsPage } from '../pages';
import { startLoadingProject } from '../store';

export const ProjectWork = () => {
  const {['*']: param}= useParams();
  const { dispatch, activeProject } = useProject();
  
  const projectId = param.split('/')[0];

  useEffect(() => {
    if ( !activeProject._id ) dispatch( startLoadingProject( projectId ) );
  }, []);

  return (
    <Routes>
      <Route path='/:projectId' element={ <ProjectsWork />} />
      <Route path='/:projectId/collaborators' element={ <CollaboratorsPage />} />
      <Route path='/:projectId/settings' element={ <SettingsPage />} />
    </Routes>
  )
}
