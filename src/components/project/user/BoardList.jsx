import { Link } from 'react-router-dom';

export const BoardList = ({ projects }) => {
  return (
    <>
      {projects.length && projects?.map( ({ _id, name, type, colaborators, boards }) => (
        <div key={ _id } className='pb-6'>
          <div className='flex justify-between pb-4'>
            <div className='flex items-center gap-2 select-none'>
              <div className={`bg-[${ type }] px-3 py-1 rounded-md`}>{ name?.charAt(0).toUpperCase() }</div>
              <span>{ name }</span>
            </div>

            <div className='flex gap-2'>
              <Link
              to={`/w/${_id}`}
                className='bg-[#0d47a1]/40 px-4 py-1 rounded-md'
              >
                Tareas
              </Link>
              <Link
              to={`/w/${_id}/collaborators`}
                className='bg-[#0d47a1]/40 px-4 py-1 rounded-md'
              >
                Colaboradores
                <span>{` ( ${colaborators?.length} )`}</span>
              </Link>
            </div>
          </div>

          <ul className='flex gap-x-[2%] flex-wrap'>

            { boards.map( ({ _id: id, title, background }) => (
              <li className={`w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-[${ background }] rounded-md`} key={ id }>
                <Link to={`/w/${ name.split(' ').join('') }/${ id }`} className='block w-full h-full p-2'>
                  <h3 className='font-bold'>{ title }</h3>

                </Link>
              </li>
            )) }

            <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-gray-600 rounded-md'>
              <button
                className='w-full h-full font-normal text-sm'  
              >
                Crear un tablero
              </button>
            </li>
          </ul>
        </div>
      ))}
    </>
  )
}
