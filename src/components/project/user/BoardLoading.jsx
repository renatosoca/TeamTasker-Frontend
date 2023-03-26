import React from 'react'

export const BoardLoading = () => {

  const amounts = [1, 2, 3]

  return (
    <div>
      { amounts.map( ( amount ) => (
        <div key={ amount }>
          <div className='flex justify-between pb-3'>
            <div className='flex items-center gap-2'>
              <div className='bg-gray-600 animate-pulse w-[2.2rem] h-[2.2rem] rounded-md'></div>
              <span className='bg-gray-600 w-28 h-3 rounded-md animate-pulse'></span>
            </div>

            <div className='flex gap-2'>
              <div
                className='bg-gray-600 animate-pulse px-4 py-1 rounded-md w-24'
              >
              </div>
              <div
                className='bg-gray-600 animate-pulse px-4 py-1 rounded-md w-24'
              >
                <span></span>
              </div>
            </div>
          </div>

          <div className='flex gap-x-[2%]'>
            <div className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-400 rounded-md animate-pulse'></div>
            <div className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-400 rounded-md animate-pulse'></div>
            <div className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-400 rounded-md animate-pulse'></div>
            <div className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-400 rounded-md animate-pulse'></div>
          </div>
        </div>
      ) )}
    </div>
  )
}
