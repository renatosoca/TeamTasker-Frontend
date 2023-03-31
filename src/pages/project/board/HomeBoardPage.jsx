import { useEffect } from 'react';
import { SkeletonProjectBoards } from '../../../components';
import { useProject } from '../../../hooks';
import { ProjectLayout } from '../../../layouts';

export const HomeBoardPage = () => {

  const { activeProject, isLoadingProjects } = useProject();
  
  useEffect(() => {
    document.title =`${activeProject?.boards[0].title} | TeamTasker`
  }, [activeProject]);

  return (
    <ProjectLayout>

      <div className='px-2 md:px-6 py-6'>
        <h2 className='text-2xl pb-4 font-jakarta'>Tarea</h2>

        {isLoadingProjects
          ?<SkeletonProjectBoards />
          :<ul className='flex gap-[2%] flex-wrap w-full'>
          </ul>
        }
      </div>
    </ProjectLayout>
  )
}
