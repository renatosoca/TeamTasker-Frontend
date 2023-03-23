import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ProjectUserLayout } from '../../../layouts';

export const BoardsUserPage = () => {
  useEffect(() => {
    document.title = 'Proyectos | TeamTasker';
  }, [])
  
  return (
    <ProjectUserLayout>
      <main className='max-w-4xl w-full p-4'>
        <h2 className='uppercase text-xl text-gray-400 font-bold pb-6'>Todos tus proyectos</h2>

        <div>
          <div className='pb-6'>
            <div className='flex justify-between pb-3'>
              <div className='flex items-center gap-2'>
                <div className='bg-black px-3 py-1 rounded-md'>P</div>
                <span>
                  Project 1
                </span>
              </div>

              <div className='flex gap-2'>
                <Link
                  className='bg-black px-4 py-1 rounded-md'
                >
                  Tareas
                </Link>
                <Link
                  className='bg-black px-4 py-1 rounded-md'
                >
                  Colaboradores
                </Link>
              </div>
            </div>

            <ul className='flex gap-x-[2%] flex-wrap'>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
            </ul>
          </div>
          
          <div className='pb-6'>
            <div className='flex justify-between pb-3'>
              <div className='flex items-center gap-2'>
                <div className='bg-black px-3 py-1 rounded-md'>P</div>
                <span>
                  Project 1
                </span>
              </div>

              <div className='flex gap-2'>
                <Link
                  className='bg-black px-4 py-1 rounded-md'
                >
                  Tareas
                </Link>
                <Link
                  className='bg-black px-4 py-1 rounded-md'
                >
                  Colaboradores
                </Link>
              </div>
            </div>

            <ul className='flex gap-x-[2%] flex-wrap'>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
              <li className='w-[49%] md:w-[32%] mp:w-[23.5%] mb-[2%] h-24 bg-black p-2 rounded-md'>
                <h3>Proyecto 1</h3>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </ProjectUserLayout>
  )
}