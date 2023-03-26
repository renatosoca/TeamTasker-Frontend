import { useEffect } from 'react'
import { BoardList, BoardLoading } from '../../../components';
import { useProject } from '../../../hooks';
import { ProjectUserLayout } from '../../../layouts';

export const BoardsUserPage = () => {
  
  const { projects, loading } = useProject();
  
  useEffect(() => {
    document.title = 'Proyectos | TeamTasker';
  }, [])
  
  return (
    <ProjectUserLayout>
      <main className='max-w-4xl min-w-min w-full p-4 flex h-full'>
        <div className='flex flex-col h-full w-full'>
          <h2 className='uppercase text-xl text-gray-400 font-bold pb-6'>Todos tus proyectos</h2>

          <div className='h-full'>
            
            { loading === 'loading' && <BoardLoading />}

            { loading === 'success' && <BoardList projects={ projects } />}

          </div>
        </div>
      </main>
    </ProjectUserLayout>
  )
}