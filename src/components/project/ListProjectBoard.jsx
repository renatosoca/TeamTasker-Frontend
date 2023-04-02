import { NavLink } from 'react-router-dom';
import { useProject } from '../../hooks';
import { startActiveboard, startActiveProject } from '../../store';

export const ListProjectBoard = ({ board, project }) => {
  const { _id, title, background } = board;
  const { dispatch } = useProject();

  const handleActiveBoard = (board) => {
    dispatch( startActiveboard(board) );
    dispatch( startActiveProject(project) );
  }
  
  return (
    <li 
      className={`w-[100%] vs:w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 rounded-md`} 
      style={{ 
        backgroundColor: `${background?.includes('#') ? background : ''}`, 
        backgroundImage: `${background?.includes('http') ? `url(${background})` : ''}`,
        backgroundSize: 'cover',
      }}
    >
      <NavLink
        to={`/project/b/${ _id }`}
        onClick={ () => handleActiveBoard(board) }
        className={ ({isActive}) => `block w-full h-full p-2 ${ isActive ? 'bg-gray-400' : ''}`}
      >
        <h3 className='font-bold'>{ title }</h3>
      </NavLink>
    </li>
  )
}
