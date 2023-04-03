import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderProjectWork } from '../../../components';
import { customSettingsData } from '../../../data';
import { useAuth, useProject } from '../../../hooks';
import { startDeleteProject } from '../../../store';

export const SettingsPage = () => {
  const { user } = useAuth();
  const { loading, activeProject, dispatch } = useProject();
  const navigate = useNavigate();
  const lastURI = localStorage.getItem('lastURL') || `/project/u/${user?.username}`;
  
  useEffect(() => {
    document.title = 'Configuración | TeamTasker';
    if ( !activeProject ) navigate( lastURI, { replace: true });
  }, [ activeProject ]);

  const handleDeleteProject = () => {
    if ( user._id !== activeProject?.owner?._id ) return;
    dispatch( startDeleteProject() );
  }
  
  return (
    <main className='flex-1' >
      <HeaderProjectWork />

      <div className="flex justify-center">
        <div className="max-w-3xl w-full py-8 px-6">
          <div className="flex flex-col gap-4 pb-6">
            <h2 className="font-jakarta font-bold text-3xl text-center pb-3">Configuración del proyecto</h2>

            <div className="bg-[#293241] px-4 py-6 rounded text-gray-200">
              {customSettingsData.map( ({title, description }, index) => (
                <div key={ index } className='pb-3 last-of-type:pb-0'>
                  <h3 className='border-b font-jakarta font-bold pb-1 text-lg'>{ title }</h3>
                  { description.map( (item, index) => (
                    <p key={ index } className="first-of-type:pt-3 font-medium">{ item }</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={ handleDeleteProject }
              type="button"
              className={` ${loading === 'loading Delete Project' ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}  text-white font-bold py-1 px-4 rounded transition-colors`}
              disabled={ loading === 'loading Delete Project' }
            >
              Eliminar proyecto
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
