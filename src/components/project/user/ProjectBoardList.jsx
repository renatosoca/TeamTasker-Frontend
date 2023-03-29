import { Link } from 'react-router-dom';
import { useProject } from '../../../hooks';
import { openModalNewBoard, startActiveProject } from '../../../store';
import { ListProjectBoard } from '../ListProjectBoard';

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
      { projects?.map( ({ _id, name, type, collaborators, boards, owner, description }) => (
        <div key={ _id } className='pb-6'>
          <div className='flex flex-col md:flex-row md:items-start gap-2 md justify-between pb-4'>
            <div className='flex items-center gap-2 select-none whitespace-nowrap'>
              <div className={`bg-[#${ type }] px-3 py-1 rounded-md`} style={{ background: `${type}` }}>{ name?.charAt(0).toUpperCase() }</div>

              <span>{ name }</span>
            </div>  {/* END PROFILE PROJECT */}

            <div className='flex-1 flex gap-[2%] flex-wrap justify-end'>
              <Link
                onClick={ () => handleClickLinks({ _id, name, type, collaborators, boards, owner, description }) }
                to={`/project/w/${_id}`}
                className='w-[100%] xs:w-[49%] mp:w-min mb-[2%] bg-[#161B22] px-4 py-1 rounded whitespace-nowrap hover:bg-[#132F4C] transition-colors'
              >
                Tableros
              </Link>

              <Link
                onClick={ () => handleClickLinks({ _id, name, type, collaborators, boards, owner, description })}
                to={`/project/w/${_id}/collaborators`}
                className='w-[100%] xs:w-[49%] mp:w-min mb-[2%] bg-[#161B22] px-4 py-1 rounded whitespace-nowrap hover:bg-[#132F4C] transition-colors'
              >
                Colaboradores
                <span>{` (${(collaborators?.length) + 1 })`}</span>
              </Link>

              <Link
                onClick={ () => handleClickLinks({ _id, name, type, collaborators, boards, owner, description })}
                to={`/project/w/${_id}/settings`}
                className='w-[100%] xs:w-[49%] mp:w-min mb-[2%] bg-[#161B22] px-4 py-1 rounded whitespace-nowrap hover:bg-[#132F4C] transition-colors'
              >
                Configuración
              </Link>
            </div>  {/* END LINKS PROJECT */}
          </div>  {/* END HEADER PROJECT BOARD */}

          <ul className='flex gap-[2%] flex-wrap'>
            { boards.map( (board) => (
              <ListProjectBoard board={ board } />
            )) }

            <li className='w-[100%] vs:w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-600 rounded-md'>
              <button
                onClick={ () => handleClickModalBoard({ _id, name, type, collaborators, boards, owner, description })}
                className='w-full h-full font-normal text-sm'  
              >
                Crear un tablero
              </button>
            </li>
          </ul> {/* END BODY PROJECT BOARD */}
        </div>
      )) }
    </>
  )
}
