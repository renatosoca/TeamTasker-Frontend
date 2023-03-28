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
      { projects?.map( ({ _id, name, type, collaborators, boards, owner, description }) => (
        <div key={ _id } className='pb-6'>
          <div className='flex flex-col md:flex-row md:items-start gap-2 md justify-between pb-4'>
            <div className='flex items-center gap-2 select-none whitespace-nowrap'>
              <div className={`bg-[#${ type }] px-3 py-1 rounded-md`} style={{ background: `${type}` }}>{ name?.charAt(0).toUpperCase() }</div>

              <span>{ name }</span>
            </div>

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

              {/* PRueba */}
              
              {/* Fin prueba */}
            </div>
          </div>

          <ul className='flex gap-[2%] flex-wrap'>
            { boards.map( ({ _id: id, title, background }) => (
              <li className={`w-[100%] vs:w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 rounded-md hover:bg-[${background}]/40`} key={ id } style={{ background: `${background}` }}>
                <Link 
                  to={`/project/w/${ _id }/${ id }`} 
                  className='block w-full h-full p-2'
                >
                  <h3 className='font-bold'>{ title }</h3>
                </Link>
              </li>
            )) }

            <li className='w-[100%] vs:w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-600 rounded-md'>
              <button
                onClick={ () => handleClickModalBoard({ _id, name, type, collaborators, boards, owner, description })}
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
