import { useProject } from '../../hooks';
import { openModalNewBoard } from '../../store'

export const ButtonAddNewBoard = () => {

  const { dispatch } = useProject();

  return (
    <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-600 rounded-md'>
      <button
        onClick={ () => dispatch( openModalNewBoard() )}
        className='w-full h-full font-normal text-sm'  
      >
        Crear un tablero
      </button>
    </li>
  )
}
