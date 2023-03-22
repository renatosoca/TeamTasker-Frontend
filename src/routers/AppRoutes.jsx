import { Route, Routes } from 'react-router-dom';
import { AuthRoutes, ProjectUser, ProjectWork } from './';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={ <h1>Hola</h1> } />

      <Route path='/auth/*' element={ <AuthRoutes />} />

      <Route path='/u/*' element={ <ProjectUser /> } />
      <Route path='/w/*' element={ <ProjectWork /> } />
    </Routes>
  )
}
