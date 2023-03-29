import { Route, Routes, useLocation } from 'react-router-dom';
import { HomeUserPage, BoardsUserPage } from '../pages';

export const ProjectUser = () => {
  const { pathname, search } = useLocation();
  const lastURL = pathname + search;
  localStorage.setItem('lastURL', lastURL);
  
  return (
    <Routes>
      <Route path='/:user' element={ <HomeUserPage />} />
      <Route path='/:user/boards' element={ <BoardsUserPage />} />
    </Routes>
  )
}
