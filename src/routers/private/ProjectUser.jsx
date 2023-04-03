import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { ProjectUserLayout } from '../../layouts';
import { HomeUserPage, BoardsUserPage } from '../../pages';

export const ProjectUser = () => {
  const { user } = useAuth();
  const { ['*']: userId } = useParams();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const lastURL = pathname + search;

  useEffect(() => {
    if ( userId.split('/')[0] === user.username ) {
      localStorage.setItem('lastURL', lastURL);
    } else {
      const lastUrl = localStorage.getItem('lastURL');

      if ( lastUrl ) navigate( lastUrl );
    }
  }, [userId, user.username, lastURL])

  return (
    <Routes>
      <Route path='/:user' element={ <ProjectUserLayout />}>
        <Route index element={ <HomeUserPage />} />
        <Route path='/:user/boards' element={ <BoardsUserPage />} />
      </Route>
    </Routes>
  )
}
