import React, { useEffect } from 'react';
import { SkeletonProjectBoards, ButtonAddNewBoard, HeaderProjectWork, ListProjectBoard } from '../../../components';
import { useProject } from '../../../hooks';
import { ProjectLayout } from '../../../layouts';

export const ProjectsWork = () => {

  const { activeProject, isLoadingProjects } = useProject();
  
  useEffect(() => {
    document.title =`${activeProject?.name} | TeamTasker`
  }, [activeProject]);
  
  return (
    <ProjectLayout>
          <HeaderProjectWork />

          <div className='px-2 md:px-6 py-6'>
            <h2 className='text-2xl pb-4 font-jakarta'>Tus tableros</h2>

            {isLoadingProjects
              ?<SkeletonProjectBoards />
              :<ul className='flex gap-[2%] flex-wrap w-full'>
                {activeProject?.boards.map( (board) => (
                  <ListProjectBoard 
                    key={ board._id } 
                    board={ board } 
                    project={ activeProject } 
                  />
                )) }

                <ButtonAddNewBoard project={activeProject} />
              </ul>
            }
          </div>
    </ProjectLayout>
  )
}
