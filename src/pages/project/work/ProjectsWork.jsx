import React, { useEffect } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb'
import { SkeletonBoards } from '../../../components';
import { useProject } from '../../../hooks';
import { ProjectLayout } from '../../../layouts';

export const ProjectsWork = () => {

  const { activeProject, loading } = useProject();
  
  useEffect(() => {
    document.title = 'Proyecto 1 | TeamTasker'
  }, [])
  
  return (
    <ProjectLayout>
      <div className='flex justify-between items-center pt-6 pb-10 max-w-3xl w-full mx-auto'>
        <div className='flex gap-2 items-center'>
          <div className='px-5 py-2 bg-white text-5xl font-bold rounded-md text-black'>{ activeProject?.name.charAt(0).toUpperCase() }</div>
          <div className='flex gap-4'>
            <span className='text-lg font-medium'>{ activeProject?.name }</span>
            <button className='text-xl p-1 rounded-md hover:bg-[#132F4C] flex items-center justify-center transition-colors'>
              <TbEdit />
            </button>
          </div>
        </div>

        <div>
          <button
            className='flex items-center gap-2 bg-[#0d47a1]/40 px-4 py-1 rounded-md'
          >
            <FaUserPlus />
            <span>Agregar un colaborador al proyecto</span>
          </button>
        </div>
      </div>

      <div>
        <h2 className='text-xl pb-4'>Tableros</h2>

        <ul className='flex gap-x-[2%] flex-wrap w-full'>

          { loading === 'loading' ? 
            <SkeletonBoards /> :
            <>
              {activeProject?.boards.map( ({ _id, name }) => (
                <li key={ _id } className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                  <h3>{ name }</h3>
                </li>
              ))}

              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black rounded-md'>
                <button
                  className='w-full h-full font-normal text-sm'  
                >
                  Crear un tablero
                </button>
              </li>
            </>
          }
          
        </ul>
      </div>
    </ProjectLayout>
  )
}
