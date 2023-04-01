import { useEffect } from 'react'
import { MdAdminPanelSettings } from 'react-icons/md'
import { HeaderProjectWork } from '../../../components';
import { useProject } from '../../../hooks';
import { ProjectLayout } from '../../../layouts';
import { startDeleteCollaborator } from '../../../store';

export const CollaboratorsPage = () => {
  const { activeProject, isLoadingProjects, dispatch } = useProject();
  
  useEffect(() => {
    document.title = 'Colaboradores | TeamTasker';
  }, []);

  const handleDeleteCollaborator = ( collaborator ) => {
    dispatch( startDeleteCollaborator( collaborator ))
  }

  return (
    <ProjectLayout>
          <HeaderProjectWork />

          <main className=''>
            <div className='px-2 2xs:px-6 py-8'>
              <h2 className='font-jakarta text-xl pb-4'>
                Colaboradores del Proyecto ( { activeProject?.collaborators?.length } )
              </h2>

              <p>Los colaboradores agregados al proyecto pueden visualizar todos los tableros, crear nuevos tableros, editar los tableros, asignar tareas en los tableros, marcar como pendientes las tareas, marcar como completas las tareas, etc.</p>
            </div>

            <div className='px-2 2xs:px-6 flex flex-col gap-2'>
              <h2 className='font-jakarta text-lg pb-4'>Colaboradores:</h2>

              <div className='flex flex-col gap-4'>
                {isLoadingProjects ?
                  <p>Loading...</p> :
                  <>
                    {activeProject?.collaborators?.map((collaborator) => (
                      <div key={ collaborator._id} className='flex flex-col vs:flex-row gap-2 items-start vs:items-center justify-between border-b last-of-type:border-none pb-2'>
                        <div className='flex gap-1 2xs:gap-4'>
                          <div className={`rounded-full font-bold font-jakarta border-[.15rem] border-[#132F4C] text-base w-11 h-11 flex items-center justify-center`} >
                            { collaborator.name?.charAt(0) + collaborator.lastname?.charAt(0) }
                          </div>
      
                          <div>
                            <h3>{ collaborator.name } { collaborator.lastname }</h3>
                            <small>{ collaborator.email}</small>
                          </div>
                        </div>
      
                        <div className='flex vs:flex-col xs:flex-row gap-1 text-sm 2xs:text-base'>
                          {collaborator._id === activeProject?.owner?._id && (
                            <button 
                              className='flex gap-1 items-center bg-slate-400 px-1 xs:px-4 py-1 rounded cursor-not-allowed'
                              disabled={false}
                            >
                              Administrador
                              <MdAdminPanelSettings className='text-blue-700 text-2xl' />
                            </button>
                          )}

                          <button
                            onClick={() => handleDeleteCollaborator(collaborator)}
                            className={`px-2 xs:px-4 py-1 rounded ${ collaborator._id === activeProject?.owner?._id ? 'cursor-not-allowed bg-slate-400' : 'cursor-pointer bg-red-500 hover:bg-red-600'}`}
                            disabled={ collaborator._id === activeProject?.owner?._id }
                          >
                            Quitar
                          </button>
                        </div>
                      </div> /* END ITEM COLLABORATOR */
                    ))}
                  </>
                }
              </div>
            </div>
          </main>
    </ProjectLayout>
  )
}
