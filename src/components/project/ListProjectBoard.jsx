import React from 'react'

export const ListProjectBoard = ({ board }) => {

  const { _id, title, background } = board;

  return (
    <li 
      key={ id } 
      className={`w-[100%] vs:w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 rounded-md hover:bg-[${background}]/40`} 
      style={{ background: `${background}` }}
    >
      <Link 
        to={`/project/w/${ _id }`} 
        className='block w-full h-full p-2'
      >
        <h3 className='font-bold'>{ title }</h3>
      </Link>
    </li>
  )
}
