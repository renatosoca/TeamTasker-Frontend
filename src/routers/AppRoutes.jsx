import { Route, Routes } from 'react-router-dom';
import { AuthRoutes, PrivateRoutes } from './';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={ <h1>Hola</h1> } />

      <Route path='/auth/*' element={ <AuthRoutes />} />

      <Route path='/project/*' element={ <PrivateRoutes /> } />
    </Routes>
  )
}
