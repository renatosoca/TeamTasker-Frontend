export const SkeletonListSideBar = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2 px-2'>
        <div className='bg-gray-600 animate-pulse w-[2.2rem] h-[2.2rem] rounded-md'></div>
        <div className='bg-gray-600 animate-pulse h-[.1rem] py-2 rounded-md w-[60%]'></div>
      </div>
      <div className='flex items-center gap-2 px-2'>
        <div className='bg-gray-600 animate-pulse w-[2.2rem] h-[2.2rem] rounded-md'></div>
        <div className='bg-gray-600 animate-pulse h-[.1rem] py-2 rounded-md w-[60%]'></div>
      </div>
      <div className='flex items-center gap-2 px-2'>
        <div className='bg-gray-600 animate-pulse w-[2.2rem] h-[2.2rem] rounded-md'></div>
        <div className='bg-gray-600 animate-pulse h-[.1rem] py-2 rounded-md w-[60%]'></div>
      </div>
    </div>
  )
}
