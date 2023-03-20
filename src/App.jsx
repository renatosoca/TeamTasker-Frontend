import { useEffect } from 'react';
import { useAuth } from './hooks'
import { AppRoutes } from './routers'
import { revalidateSession } from './store';

export const App = () => {

  const { dispatch } = useAuth();

  useEffect(() => {
    dispatch( revalidateSession() );
  }, [])

  return (
    <>
      <AppRoutes />
    </>
  )
}
