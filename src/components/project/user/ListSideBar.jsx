import { Link } from 'react-router-dom';
import { useProject } from '../../../hooks';
import { startActiveProject } from '../../../store';

export const ListSideBar = ({ projects }) => {
  const { dispatch } = useProject();

  const handleClickActiveProject = (project) => {
    dispatch( startActiveProject( project ) )
  }

  return (
    <>
      { projects?.map( (project) => (
        <li key={ project._id } className='px-2'>
          <Link
            onClick={ () => handleClickActiveProject( project ) }
            to={`/project/w/${ project._id }`}
            className='flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] rounded transition-colors'
          >
            <div className={`px-3 py-1 rounded-md`} style={{ background: `${project.type}` }}>
              { project.name?.charAt(0).toUpperCase() }
            </div>

            <span>{ project.name }</span>
          </Link>
        </li>
      )) }
    </>
  )
}
