import { MdOutlineCheckCircleOutline, MdOutlineError, MdClose } from 'react-icons/md';
import { useAuth } from '../../hooks';
import { startClearMessage } from '../../store';

export const MessageAPI = () => {

  const { messageAPI, dispatch } = useAuth();

  const handleClick = () => {
    dispatch( startClearMessage() );
  }

  return (
    <div className='absolute top-full w-full min-h-[5rem] px-10'>
      <div className={`flex items-center justify-center py-6 px-4 bg-gray-700 rounded-lg border-l-8 ${ messageAPI?.ok ? 'border-green-500': 'border-red-400'}`}>
        <div className="relative px-10 border-r-8 border-transparent">
          { messageAPI?.ok 
            ? <MdOutlineCheckCircleOutline className='absolute left-1 top-0 text-xl text-green-500' /> 
            : <MdOutlineError className='absolute left-1 top-0 text-xl text-red-400' />
          }
          
          <p className="text-sm">{ messageAPI.msg }</p>
        
          <button
            type='button'
            onClick={ handleClick }
            className='absolute top-0 right-1 text-xl text-gray-50'
          >
            <MdClose className='form__icon' />
          </button>
        </div>
      </div>
    </div>
  )
}
