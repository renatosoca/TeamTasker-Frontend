import { Route, Routes } from 'react-router-dom';
import { CollaboratorsPage, ProjectsWork } from '../pages';

export const ProjectWork = () => {
  return (
    <Routes>
      <Route path='/:id' element={ <ProjectsWork />} />
      <Route path='/:id/collaborators' element={ <CollaboratorsPage />} />
    </Routes>
  )
}
