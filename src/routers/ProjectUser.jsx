import { Route, Routes } from 'react-router-dom';
import { CollaboratorsPage , HomeUserPage, BoardsUserPage } from '../pages';

export const ProjectUser = () => {
  return (
    <Routes>
      <Route path='/:user' element={ <HomeUserPage />} />
      <Route path='/:user/boards' element={ <BoardsUserPage />} />
    </Routes>
  )
}
