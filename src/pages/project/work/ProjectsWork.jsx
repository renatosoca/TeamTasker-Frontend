import React, { useEffect } from 'react';
import { SkeletonProjectBoards, ButtonAddNewBoard, HeaderProjectWork } from '../../../components';
import { useProject } from '../../../hooks';
import { ProjectLayout } from '../../../layouts';

export const ProjectsWork = () => {

  const { activeProject, loading } = useProject();
  
  useEffect(() => {
    document.title = 'Proyecto 1 | TeamTasker'
  }, [])
  
  return (
    <ProjectLayout>
      <HeaderProjectWork />

      <div>
        <h2 className='text-xl pb-4'>Tableros</h2>

        <ul className='flex gap-x-[2%] flex-wrap w-full'>

          { loading === 'loading' ? 
            <SkeletonProjectBoards /> :
            <>
              {activeProject?.boards.map( ({ _id, title, background }) => (
                <li key={ _id } className={`w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-[${ background }] p-2 rounded-md`} style={{ backgroundColor: `${ background }`}}>
                  <h3>{ title }</h3>
                </li>
              ))}

              <ButtonAddNewBoard />
            </>
          }
          
        </ul>
      </div>
    </ProjectLayout>
  )
}
