import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ButtonAddNewBoard, ListProjectBoard, SkeletonProjectBoards } from '../../../components';
import { useProject } from '../../../hooks';
import { startActiveProject } from '../../../store';

export const BoardsUserPage = () => {
  
  const { projects, isLoadingProjects, dispatch } = useProject();
  
  useEffect(() => {
    document.title = 'Proyectos | TeamTasker';
  }, []);

  const handleClickLinks = ( project ) => {
    dispatch( startActiveProject( project ) )
  }
  
  return (
    <main className='max-w-4xl min-w-min w-full px-4 py-6 flex h-full'>
      <div className='flex flex-col h-full w-full'>
        <h2 className='text-2xl text-gray-400 font-bold pb-6 pt-4 select-none whitespace-nowrap font-jakarta'>
          Todos tus proyectos
        </h2>

        { isLoadingProjects
          ? <SkeletonProjectBoards />
          :<>
            {projects?.map( ({ _id, name, type, collaborators, boards, owner, description }) => (
              <div key={ _id } className='pb-6'>
                <div className='flex flex-col mp:flex-row md:items-start gap-2 md justify-between pb-4'>
                  <div
                    className='flex items-center w-full gap-2 select-none overflow-x-hidden pr-4'
                    title={ name }
                  >
                    <div className={`bg-[#${ type }] px-3 py-1 rounded-md`} style={{ background: `${type}` }}>
                      { name?.charAt(0).toUpperCase() }
                    </div>

                    <span className='webkitBox'>{ name }</span>
                  </div>  {/* END PROFILE PROJECT */}

                  <div className='flex w-full gap-[2%] flex-wrap mp:flex-nowrap justify-start mp:justify-end'>
                    <Link
                      onClick={ () => handleClickLinks({ _id, name, type, collaborators, boards, owner, description }) }
                      to={`/project/w/${_id}`}
                      className='w-[100%] xs:w-[49%] md:w-[32%] mp:w-min mb-[2%] bg-[#161B22] px-4 py-1 rounded whitespace-nowrap hover:bg-[#132F4C] transition-colors'
                    >
                      Tableros
                    </Link>

                    <Link
                      onClick={ () => handleClickLinks({ _id, name, type, collaborators, boards, owner, description })}
                      to={`/project/w/${_id}/collaborators`}
                      className='w-[100%] xs:w-[49%] md:w-[32%] mp:w-min mb-[2%] bg-[#161B22] px-4 py-1 rounded whitespace-nowrap hover:bg-[#132F4C] transition-colors'
                    >
                      Colaboradores
                      <span>{` (${ collaborators?.length })`}</span>
                    </Link>

                    <Link
                      onClick={ () => handleClickLinks({ _id, name, type, collaborators, boards, owner, description })}
                      to={`/project/w/${_id}/settings`}
                      className='w-[100%] xs:w-[49%] md:w-[32%] mp:w-min mb-[2%] bg-[#161B22] px-4 py-1 rounded whitespace-nowrap hover:bg-[#132F4C] transition-colors'
                    >
                      Configuración
                    </Link>
                  </div>  {/* END LINKS PROJECT */}
                </div>  {/* END HEADER PROJECT BOARD */}

                <ul className='flex gap-[2%] flex-wrap'>
                  { boards.map( (board) => (
                    <ListProjectBoard 
                      key={board._id} 
                      board={ board } 
                      project={{ _id, name, type, collaborators, boards, owner, description }} 
                    />
                  )) }

                  <ButtonAddNewBoard project={{ _id, name, type, collaborators, boards, owner, description }} />
                </ul> {/* END BODY PROJECT BOARD */}
              </div>
            ))}
          </>
        }
      </div>
    </main>
  )
}