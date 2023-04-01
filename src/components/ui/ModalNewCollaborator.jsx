import { useState } from 'react';
import ReactModal from 'react-modal';
import { CgClose } from 'react-icons/cg';
import { useForm, useProject, useUi } from '../../hooks';
import { closeModalNewCollaborator, startAddCollaborator, startSearchUsers } from '../../store';
import { initialNewCollaborator, validationsNewCollaborator } from '../../data/data';
import { LoadingSpinner } from './LoadingSpinner';
import { ToastNotification } from './ToastNotification';

ReactModal.setAppElement("#root");

export const ModalNewCollaborator = () => {

  const { modalNewCollaborator } = useUi();
  const { isLoadingSearchUsers, users, activeProject, dispatch } = useProject();
  const { 
    formState, username, isFormValid, usernameValid, handleInputChange, handleResetForm,
  } = useForm( initialNewCollaborator, validationsNewCollaborator );

  const [ isFormSubmit, setIsFormSubmit ] = useState(false);
  const [ showResultUsers, setShowResultUsers ] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmit(true);
    
    if ( !isFormValid ) return;
    dispatch( startSearchUsers( formState ));
    setIsFormSubmit(false);
    setShowResultUsers(true);
  }

  const handleClickAddCollaborator = (user) => {
    if ( activeProject?.collaborators.find( coll => coll._id === user._id ) ) return;
   dispatch( startAddCollaborator( user ) );
  }

  const handleRequestClose = () => {
    dispatch( closeModalNewCollaborator() );

    setTimeout(() => {
      setIsFormSubmit(false);
      setShowResultUsers(false);
      handleResetForm();
    }, 500);
  }

  return (
    <ReactModal
      isOpen={ modalNewCollaborator }
      onRequestClose={ handleRequestClose }
      closeTimeoutMS={ 300 }
      overlayClassName='modal'
      className={`max-w-[40rem] w-[95%] bg-[#161B22] text-white rounded-[.3rem] px-0 md:px10`}
    >
      <ToastNotification />
      
      <div className='relative py-12 px-4'>
        <h2 className='text-base 2xs:text-lg md:text-xl pb-4 3xs:pb-6 font-jakarta'>
          Añadir un colaborador a "<span className='text-white font-bold'>{ activeProject?.name?.charAt(0).toUpperCase() + activeProject?.name?.slice(1) }"</span>
        </h2>

        <form
          onSubmit={ handleSubmit }
          className="w-full relative"
        >
          <div>
            <small className='block text-end text-gray-400 pb-4 2xs:pb-1 text-xs md:text-sm'>( Presione Enter para buscar un usuario )</small>

            <div className={`inputs border-gray-400 text-gray-600 hover:border-[#5FA7F0] relative w-full border-[.15rem] rounded-[.25rem] transition-colors ease-in-out focus-within:border-[#5FA7F0]`} >
              <input
                className={`inputs__input w-full px-2 py-2 outline-none text-white font-normal bg-inherit resize-none`}
                type="text"
                id="username"
                name="username"
                value={ username }
                onChange={ handleInputChange }
                placeholder=" "
                autoComplete="off"
              />
              
              <label
                htmlFor="username"
                className={`inputs__label text-gray-300 absolute bg-[#161B22] px-1 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
              >
                Nombre de usuario
              </label>
            </div>

            <span className='text-red-500 text-sm font-medium'>{ isFormSubmit && usernameValid}</span>
          </div>

          {showResultUsers && (
            <div className='absolute top-[110%] w-full bg-[#0D1117] rounded text-white'>
              {isLoadingSearchUsers ?
                <p className='flex gap-2 items-center justify-center py-4'><LoadingSpinner title={'Buscando usuario'} /></p> :
                <>
                  { (users.length >= 1) ? 
                    <>
                      <div className='px-4 py-2 font-jakarta font-bold'>Selecione un usuario</div>
                      {users?.map( user => (
                        <button 
                          key={user._id}
                          onClick={ () => handleClickAddCollaborator(user) }
                          type='button'
                          className={`group bg-[#0A2342] block w-full ${activeProject?.collaborators.find( coll => coll._id === user._id ) ? 'cursor-not-allowed' : ''} hover:bg-[#64B5F6]/80 text-white px-4 py-1 font-jakarta font-bold transition-colors ease-in-out duration-200 my-1 min-h-[4rem]`}
                          disabled={ activeProject?.collaborators.find( coll => coll._id === user._id ) }
                        >
                          <div className='flex items-center gap-3 text-start'>
                            <div className=' rounded-full w-9 h-9 bg-[#64B5F6] text-black group-hover:text-white flex items-center justify-center font-jakarta font-normal transition-colors'>
                              { user.name?.charAt(0).toUpperCase() + user.lastname?.charAt(0).toUpperCase() }
                            </div>

                            <div className='flex flex-col'>
                              <p className='font-bold font-jakarta'>{ user.name + ' ' + user.lastname }</p>
                              { user._id === activeProject.owner._id ? 
                                <small className='text-gray-300 py-1'>Es el administrador del proyecto</small>
                                : activeProject?.collaborators.find( coll => coll._id === user._id ) ?
                                <small className='text-gray-300 py-1'>Es un colaborador del proyecto</small>  :
                                <>
                                  <small className='font-jakarta py-1'>@{ user.username }</small>
                                </>
                              }
                            </div>
                          </div>
                        </button>
                      ))}
                    </> :
                    <p className='text-center py-4'>No se encontraron resultados</p>
                  }
                </>
              }
            </div>
          )}
        </form>

        <button
          onClick={ handleRequestClose }
          className='absolute top-2 3xs:top-4 right-2 3xs:right-4 px-1 py-1 rounded-full text-2xl text-gray-500 hover:text-white transition-colors ease-in-out'
        >
          <CgClose />
        </button>
      </div>
    </ReactModal>
  )
}
