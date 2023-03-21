import { Route, Routes } from 'react-router-dom';
import { ProjectLayout } from '../layouts';
import { CollaboratorsPage, HomePage } from '../pages';

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <ProjectLayout /> }>
        <Route index element={ <HomePage />} />
        <Route path='/collaborators' element={ <CollaboratorsPage />} />
      </Route>
    </Routes>
  )
}
