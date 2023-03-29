import { useProject } from '../../hooks';
import { openModalNewBoard, startActiveProject } from '../../store'

export const ButtonAddNewBoard = ({ project }) => {
  const { dispatch } = useProject();

  const handleClickModalBoard = ( project ) => {
    dispatch( startActiveProject( project ) )
    dispatch( openModalNewBoard() );
  }

  return (
    <li className='w-[100%] vs:w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-600 rounded-md'>
      <button
        onClick={ () => handleClickModalBoard( project )}
        className='w-full h-full font-normal text-sm'  
      >
        Crear un tablero
      </button>
    </li>
  )
}
