import { useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useProject } from '../hooks';
import { HomeBoardPage } from '../pages';
import { startLoadingBoard } from '../store';

export const ProjectBoard = () => {
  const { ['*']: param }= useParams();
  const { dispatch, activeBoard } = useProject();
  
  const boardId = param.split('/')[0];

  useEffect(() => {
    if ( !activeBoard._id ) dispatch( startLoadingBoard(boardId) );
  }, []);

  return (
    <Routes>
      <Route path='/:BoardId' element={ <HomeBoardPage />} />
    </Routes>
  )
}
