import { Routes, Route } from 'react-router-dom';
import { HomeBoardPage } from '../pages';

export const ProjectBoard = () => {
  return (
    <Routes>
      <Route path='/:id' element={ <HomeBoardPage />} />
    </Routes>
  )
}
