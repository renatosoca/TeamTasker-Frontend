import { Route, Routes } from 'react-router-dom';
import { ConfirmAccPage, ForgotPassPage, LoginPage, RegisterPage, ResetPassPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/reset-password/:token' element={<ResetPassPage />} />

      <Route path='/forgot-password' element={<ForgotPassPage />} />
      <Route path='/confirm-account/:token' element={<ConfirmAccPage />} />

      <Route path='/*' element={<div>404</div>} />
    </Routes>
  )
}
