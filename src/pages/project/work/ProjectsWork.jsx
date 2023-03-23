import React, { useEffect } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb'
import { ProjectLayout } from '../../../layouts';

export const ProjectsWork = () => {
  useEffect(() => {
    document.title = 'Proyecto 1 | TeamTasker'
  }, [])
  
  return (
    <ProjectLayout>
      <div className='flex justify-between items-center pt-6 pb-10 max-w-3xl w-full mx-auto'>
        <div className='flex gap-2 items-center'>
          <div className='px-5 py-2 bg-white text-5xl font-bold rounded-md text-black'>P</div>
          <div>
            <span>Proyecto 1</span>
            <button>
              <TbEdit />
            </button>
          </div>
        </div>

        <div>
          <button
            className='flex items-center gap-2 bg-[#0d47a1]/40 px-4 py-2 rounded-md'
          >
            <FaUserPlus />
            <span>Agregar un colaborador al proyecto</span>
          </button>
        </div>
      </div>

      <div>
        Body
      </div>
    </ProjectLayout>
  )
}
