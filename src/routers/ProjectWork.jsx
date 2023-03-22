import { Route, Routes } from 'react-router-dom';
import { CollaboratorsPage } from '../pages';

export const ProjectWork = () => {
  return (
    <Routes>
      <Route path='/collaborators' element={ <CollaboratorsPage />} />
    </Routes>
  )
}
