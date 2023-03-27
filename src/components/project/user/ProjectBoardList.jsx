import { Link } from 'react-router-dom';
import { useProject } from '../../../hooks';
import { openModalNewBoard, startActiveProject } from '../../../store';

export const ProjectBoardList = ({ projects }) => {

  const { dispatch } = useProject();

  const handleClickLinks = ( project ) => {
    dispatch( startActiveProject( project ) )
  }

  const handleClickModalBoard = ( project ) => {
    dispatch( startActiveProject( project ) )
    dispatch( openModalNewBoard() );
  }

  return (
    <>
      { projects?.map( ({ _id, name, type, colaborators, boards, owner, description }) => (
        <div key={ _id } className='pb-6'>
          <div className='flex justify-between pb-4'>
            <div className='flex items-center gap-2 select-none'>
              <div className={`bg-[#${ type }] px-3 py-1 rounded-md`} style={{ background: `${type}` }}>{ name?.charAt(0).toUpperCase() }</div>

              <span>{ name }</span>
            </div>

            <div className='flex gap-2'>
              <Link
                onClick={ () => handleClickLinks({ _id, name, type, colaborators, boards, owner, description }) }
                to={`/project/w/${_id}`}
                className='bg-[#0d47a1]/40 px-4 py-1 rounded-md'
              >
                Tableros
              </Link>

              <Link
                onClick={ () => handleClickLinks({ _id, name, type, colaborators, boards, owner, description })}
                to={`/project/w/${_id}/collaborators`}
                className='bg-[#0d47a1]/40 px-4 py-1 rounded-md'
              >
                Colaboradores
                <span>{` (${(colaborators?.length) + 1 })`}</span>
              </Link>
            </div>
          </div>

          <ul className='flex gap-[2%] flex-wrap'>
            { boards.map( ({ _id: id, title, background }) => (
              <li className={`w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 rounded-md`} key={ id } style={{ background: `${background}` }}>
                <Link 
                  to={`/project/w/${ _id }/${ id }`} 
                  className='block w-full h-full p-2'
                >
                  <h3 className='font-bold'>{ title }</h3>
                </Link>
              </li>
            )) }

            <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-600 rounded-md'>
              <button
                onClick={ () => handleClickModalBoard({ _id, name, type, colaborators, boards, owner, description })}
                className='w-full h-full font-normal text-sm'  
              >
                Crear un tablero
              </button>
            </li>
          </ul>
        </div>
      )) }
    </>
  )
}
