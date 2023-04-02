import { useEffect } from 'react';
import { useProject } from '../../../hooks';
import { ProjectBoardLayout } from '../../../layouts';

export const HomeBoardPage = () => {

  const { activeBoard, activeProject } = useProject();
  
  const array = Array(1).fill(0);

  useEffect(() => {
    document.title =`${activeBoard?.title} | TeamTasker`
  }, [activeBoard]);

  return (
    <ProjectBoardLayout>
      <div className='flex-1 flex flex-col pt-6'>
        <div className='flex justify-between'>
          <h2 className='text-2xl pb-4 px-6 font-jakarta'>Tarea</h2>
          <h2>Prueba</h2>
        </div>
        
        <div className='flex-1 relative'>
          <div className='absolute top-0 bottom-0 left-0 right-0 mb-2'>
            <div className='flex gap-1 w-full h-full overflow-x-auto scrollbarX'>
              {array.map((_, index) => (
                <div 
                  key={index} 
                  className='flex flex-col gap-4 max-h-[calc(100vh-10rem)] min-w-[15rem] max-w-[15rem] bg-[#161B22] p-2 rounded-md ml-3 h-min'
                >
                  <div className='flex justify-between items-center font-jakarta text-[1.1rem]'>
                    <p>Lista 1</p>
                    <button>...</button>
                  </div>

                  <div className='flex-1 flex flex-col gap-2 pr-1 overflow-y-auto scrollbar'>
                    {array.map((_, index) => (
                      <div key={index} className='bg-[#132F4C] rounded'>Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1 Nota 1</div>
                    ))}
                  </div>

                  <button
                    type='button'
                  >
                    Añadir una tarea
                  </button>
                </div>  /* END LIST NOTES */
              ))}

              <button
                type='button'
                className='flex flex-col gap-4 min-w-[15rem] bg-[#161B22] p-2 rounded-md mx-3 h-min'
              >
                Agregar una lista
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProjectBoardLayout>
  )
}
