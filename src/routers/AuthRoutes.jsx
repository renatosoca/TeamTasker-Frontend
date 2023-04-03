import { Navigate, Route, Routes } from 'react-router-dom';

import { LoadingPage } from '../components';
import { useAuth } from '../hooks';
import { AuthLayout } from '../layouts';
import { ConfirmAccPage, ForgotPassPage, LoginPage, RegisterPage, ResetPassPage } from '../pages';

export const AuthRoutes = () => {
  const { status } = useAuth();

  if (status === 'init') return <LoadingPage />;

  return (
    <Routes>
      <Route path='/' element={ <AuthLayout /> }>
        <Route index element={<LoginPage />} />
        <Route path='reset-password/:token' element={<ResetPassPage />} />
      </Route>

      <Route path='/register' element={<RegisterPage />} />
      <Route path='/confirm-account/:token' element={<ConfirmAccPage />} />
      <Route path='/forgot-password' element={<ForgotPassPage />} />

      <Route path='/*' element={<Navigate to='/auth' />} />
    </Routes>
  )
}
