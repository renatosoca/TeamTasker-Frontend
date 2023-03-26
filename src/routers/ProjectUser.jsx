import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useProject } from '../hooks';
import { HomeUserPage, BoardsUserPage } from '../pages';
import { startLoadingProjects } from '../store';

export const ProjectUser = () => {
  const { projects, dispatch } = useProject();

  useEffect(() => {
    dispatch( startLoadingProjects() );
  }, [])
  
  return (
    <Routes>
      <Route path='/:user' element={ <HomeUserPage />} />
      <Route path='/:user/boards' element={ <BoardsUserPage />} />
    </Routes>
  )
}
