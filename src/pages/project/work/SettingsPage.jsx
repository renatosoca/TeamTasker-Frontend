import { useEffect } from 'react';
import { HeaderProjectWork } from '../../../components';
import { customSettingsData } from '../../../data/data';
import { useProject } from '../../../hooks';
import { ProjectLayout } from '../../../layouts';
import { startDeleteProject } from '../../../store';

export const SettingsPage = () => {
  const { activeProject, dispatch } = useProject();
  
  useEffect(() => {
    document.title = 'Configuración | TeamTasker';
  }, []);

  const handleDeleteProject = () => {
    dispatch( startDeleteProject() );
  }

  return (
    <ProjectLayout>
          <HeaderProjectWork />
          <main className="flex justify-center">
            <div className="max-w-3xl w-full py-8 px-6">
              <div className="flex flex-col gap-4 pb-6">
                <h2 className="font-jakarta font-bold text-3xl text-center pb-3">Configuración del proyecto</h2>

                <div className="bg-[#293241] px-4 py-6 rounded text-gray-200">
                  {customSettingsData.map( ({title, description }, index) => (
                    <div key={ index } className='pb-3 last-of-type:pb-0'>
                      <h3 className='border-b font-jakarta font-bold pb-1 text-lg'>{ title }</h3>
                      <p className="pt-3 font-medium">{ description }</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={ handleDeleteProject }
                  type="button"
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded transition-colors"
                >
                  Eliminar proyecto
                </button>
              </div>
            </div>
          </main>
    </ProjectLayout>
  )
}
