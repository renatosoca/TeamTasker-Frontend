import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className='grid lg:grid-cols-2 min-h-screen'>
      <Outlet />
    </div>
  )
}
