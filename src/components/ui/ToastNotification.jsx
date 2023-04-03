import { FaInfo, FaCheck } from 'react-icons/fa';
import { AiOutlineExclamation } from 'react-icons/ai';

import { useProject, useUi } from '../../hooks'
import { LoadingSpinner } from './LoadingSpinner';

export const ToastNotification = ({ textLoading }) => {
  const { toastNotification } = useUi();
  const { isLoadingToast, successMessage, errorMessage } = useProject();

  return (
    <div
      className={`absolute top-4 ${ toastNotification ? 'right-4' : ' -right-full' } transition-[right] ease-in-out overflow-hidden`}
    >
      <div 
      className={`pl-5 pr-6 py-3 bg-gray-700 rounded font-jakarta font-medium border-l-[.3rem] ${ isLoadingToast ? 'border-blue-500' : !!successMessage ? 'border-green-500' : !!errorMessage ? 'border-red-500' : '' }`}
      >
        {isLoadingToast && (
          <div className="flex gap-5 items-center">
            <FaInfo className='bg-blue-600 w-6 h-6 p-1 rounded-full' />
            <p className='flex gap-2 py-2 items-center text-gray-300'>
              <LoadingSpinner title={textLoading} />
            </p>
          </div>
        )}
        {!!successMessage  && (
          <div className="flex gap-5 items-center">
            <FaCheck className='bg-green-500 text-xl w-6 h-6 p-1 rounded-full' />
            <div className=''>
              <p className='block pb-1 font-bold'>Correcto</p>
              <small className='flex gap-2 items-center text-sm text-gray-300'>{ successMessage }</small>
            </div>
          </div>
        )}
        {!!errorMessage  && (
          <div className="flex gap-5 items-center">
            <AiOutlineExclamation className='text-2xl bg-red-500 rounded-full' />
            <div className=''>
              <p className='block pb-1 font-bold'>Error</p>
              <small className='text-gray-300 text-sm'>{ errorMessage }</small>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
