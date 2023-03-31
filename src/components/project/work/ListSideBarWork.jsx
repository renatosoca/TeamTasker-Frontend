import { NavLink } from 'react-router-dom'
import { useProject } from '../../../hooks'
import { startActiveboard } from '../../../store'

export const ListSideBarWork = ({ activeProject }) => {
  const { dispatch } = useProject();

  const handleActiveBoard = (board) => {
    dispatch( startActiveboard(board) );
  }
  
  return (
    <>
      {activeProject?.boards?.map( ({ _id, title, background, project, tasks }) => (
        <li
          key={ _id }
          className='text-ellipsis whitespace-nowrap'
          title={ title }
        >
          <NavLink
            onClick={ () => handleActiveBoard({ _id, title, background, project, tasks }) }
            to={`/project/b/${ _id }`}
            className={ ({isActive}) => `flex items-center gap-2 py-1 px-2 ${ isActive ? 'bg-[#132F4C]/70' : ''} hover:bg-[#132F4C] text-white rounded transition-colors`}
          >
            <div 
              className={`px-4 py-4 rounded-md`} 
              style={{ 
                backgroundColor: `${background.includes('#') ? background : ''}`, 
                backgroundImage: `${background.includes('http') ? `url(${background})` : ''}`,
                backgroundSize: 'cover',
              }}
            >
            </div>

            <span className='text-ellipsis whitespace-nowrap overflow-x-hidden'>{ title }</span>
          </NavLink>
        </li>
      ))}
    </>
  )
}
