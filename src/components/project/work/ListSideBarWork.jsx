import { Link } from 'react-router-dom'

export const ListSideBarWork = ({ activeProject }) => {
  return (
    <>
      {activeProject?.boards.map( ({ _id, title, background, project }) => (
        <li 
          key={ _id }
          className='text-ellipsis whitespace-nowrap'
          title={ title }
        >
          <Link
            to={`/project/w/${ project }`}
            className='flex items-center gap-2 py-1 px-2 hover:bg-[#132F4C] text-white rounded transition-colors overflow-x-hidden'
          >
            <div className={`bg-[${ background }] px-3 py-1 rounded-md`} style={{ backgroundColor: `${background}`}}>
              { title?.charAt(0).toUpperCase() }
            </div>

            <span>{ title }</span>
          </Link>
        </li>
      ))}
    </>
  )
}
