import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layouts';
import { ConfirmAccPage, ForgotPassPage, LoginPage, RegisterPage, ResetPassPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthLayout />} >
        <Route index element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPassPage />} />
        <Route path='/reset-password/:token' element={<ResetPassPage />} />
      </Route>

      <Route path='/confirm-account/:token' element={<ConfirmAccPage />} />

      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}
