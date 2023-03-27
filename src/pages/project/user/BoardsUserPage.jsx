import { useEffect } from 'react'
import { ProjectBoardList, SkeletonProjectBoards } from '../../../components';
import { useProject } from '../../../hooks';
import { ProjectUserLayout } from '../../../layouts';

export const BoardsUserPage = () => {
  
  const { projects, loading } = useProject();
  
  useEffect(() => {
    document.title = 'Proyectos | TeamTasker';
  }, [])
  
  return (
    <ProjectUserLayout>
      <main className='max-w-4xl min-w-min w-full px-4 py-6 flex h-full'>
        <div className='flex flex-col h-full w-full'>
          <h2 className='uppercase text-xl text-gray-400 font-bold pb-6 pt-4 select-none'>Todos tus proyectos</h2>

          <div className='h-full'>
            { loading === 'loading'
              ? <SkeletonProjectBoards />
              : <ProjectBoardList projects={ projects } />
            }
          </div>
        </div>
      </main>
    </ProjectUserLayout>
  )
}