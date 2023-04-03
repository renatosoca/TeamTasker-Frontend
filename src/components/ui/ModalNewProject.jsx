import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import Select from 'react-select';
import { CgClose } from 'react-icons/cg';

import { useForm, useProject, useUi } from '../../hooks';
import { closeModalNewProject, startSavedProject, startTypeAction } from '../../store';
import { initialNewProject, typeProjects, validationsNewProject } from '../../data';
import { stylesSelect } from '../../styles';
import { LoadingSpinner } from './LoadingSpinner';

ReactModal.setAppElement("#root");

export const ModalNewProject = () => {

  const { modalNewProject, typeAction } = useUi();
  const { isLoadingSaveProject, activeProject, dispatch } = useProject();

  const [ formValues, setFormValues ] = useState(initialNewProject)
  const isEditProject = activeProject?._id !== '' && typeAction === 'editProject';

  const { 
    formState, name, description, isFormValid, nameValid, typeValid, handleInputChange, handleCustomChange, handleResetForm
  } = useForm( formValues, validationsNewProject );

  useEffect(() => {
    setFormValues(initialNewProject);

    if ( isEditProject ) {
      setFormValues({
        name: activeProject.name,
        description: activeProject.description,
        type: activeProject.type,
      })
    }
  }, [activeProject, typeAction]);

  const handleCloseModalNewProject = () => {
    dispatch( closeModalNewProject() );
    setTimeout(() => {
      handleResetForm();
      dispatch( startTypeAction(''));
    }, 500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ( !isFormValid ) return;
    dispatch( startSavedProject(formState) );
    if ( !isEditProject ) handleResetForm();
  }

  return (
    <ReactModal
      isOpen={ modalNewProject }
      onRequestClose={ handleCloseModalNewProject }
      closeTimeoutMS={ 300 }
      overlayClassName='modal__project'
      className={`relative max-w-[35rem] mp:max-w-[80rem] w-[95%] bg-[#292F36] text-white rounded-md my-[4rem] mp:my-0 overflow-hidden`}
    >
      <div className='flex flex-col-reverse mp:grid mp:grid-cols-2'>
        <div className='max-w-lg w-full mx-auto py-6 px-4 mp:px-8 vs:pt-10 mp:py-10'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold font-jakarta select-none'>
              {isEditProject ? 'Editar Proyecto' : 'Crea tu proyecto en unos simples pasos'}
            </h2>
            <p className='text-gray-400 pt-3 pb-6'>
              {isEditProject ? 'Editar tu proyecto es muy simple, solo tienes que ingresar los datos que deseas modificar' : 'Organiza tus proyectos de manera facil, invita a tus colaboradores para que puedan participar' }
            </p>
          </div>

          <form
            onSubmit={ handleSubmit }
            className='flex flex-col gap-6 py-4'
          >
            <div className="w-full">
              <div className={`inputs border-gray-400 text-gray-600 hover:border-[#5FA7F0] relative w-full border-[.15rem] rounded-md transition-colors ease-in-out focus-within:border-[#5FA7F0]`} >

                <input
                  className={`inputs__input w-full px-2 py-3 outline-none text-white font-normal bg-inherit resize-none`}
                  type="text"
                  id="name"
                  name="name"
                  value={ name }
                  onChange={ handleInputChange }
                  placeholder=" "
                  autoComplete="off"
                />
                
                <label
                  htmlFor="name"
                  className={`inputs__label text-gray-300 absolute bg-[#292F36] px-1 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                >Nombre del Proyecto</label>
              </div>

              <span className='text-sm block text-start text-gray-400 pt-1'>Digite el nombre de su proyecto <small className='text-red-500 text-sm'>*</small></span>
            </div>

            <div>
              <Select
                styles={ stylesSelect }
                onChange={ ({ value }) => handleCustomChange( 'type', value) }
                defaultValue={ isEditProject ? typeProjects.find( type => type.value === activeProject.type ) : typeProjects[0]}
                classNamePrefix='select'
                placeholder='Seleccionar...'
                options={ typeProjects }
              />

              <span className='text-sm block text-start text-gray-400 pt-1'>Escoga el tipo de proyecto que va a desarrollar <small className='text-red-500 text-sm'>*</small></span>
            </div>

            <div className="w-full pb-4 group">
              <div className={`textarea border-gray-400 text-gray-600 hover:border-[#5FA7F0] relative w-full border-[.15rem] rounded-md transition-colors ease-in-out focus-within:border-[#5FA7F0]`} >

                <textarea
                  className={`textarea__input w-full px-2 py-3 outline-none text-white font-normal bg-inherit resize-none`}
                  rows="4"
                  id="description"
                  name="description"
                  value={ description }
                  onChange={ handleInputChange }
                  placeholder=" "
                  autoComplete="off"
                />
                
                <label
                  htmlFor="description"
                  className={`textarea__label text-gray-300 absolute bg-[#292F36] px-1 text-base top-[5%] left-2 font-medium focus-within:top-1/2 transition-[top transform] duration-200 cursor-text`}
                >Descripción del proyecto</label>
              </div>

              <span className='text-sm block text-start text-gray-400 pt-1'>Ingrese una breve descripción para sus colaboradores</span>
            </div>

            <button
              className={`flex gap-2 justify-center items-center ${ isFormValid ? 'bg-[#5FA7F0] text-white hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed text-gray-300'} rounded-md py-3 font-medium`}
              disabled={ !isFormValid }
            >
              { isLoadingSaveProject ? <LoadingSpinner title={isEditProject ? 'Editando proyecto..' : 'Creando proyecto...'} /> : isEditProject ? 'Editar proyecto' : 'Crear proyecto' }
            </button>
          </form>
        </div>

        <div className='w-full flex items-center justify-center bg-[url(https://a.trellocdn.com/prgb/assets/df0d81969c6394b61c0d.svg)] bg-cover bg-no-repeat transform rotate-[-90deg] mp:rotate-0 scale-y-[2] mp:scale-y-100 bg-[10rem] mp:bg-left'>
          <div className='relative transform scale-x-[.5] mp:scale-100 rotate-90 mp:rotate-0 w-[40rem] h-[15rem] xs:h-[20rem] flex justify-center items-start pt-10 mp:pt-0'>
            <img src="https://a.trellocdn.com/prgb/assets/d1f066971350650d3346.svg" width='400' height="200" alt="Hero Modal Project" />
            <img className={`absolute ${ !nameValid ? 'top-[70%] left-1/4' : 'top-full left-full'} transition-[top left] duration-200`} src="https://a.trellocdn.com/prgb/assets/1a4590e4c12ebbbd161a.svg" alt="Hero Success Modal Name" />
            <img className={`absolute ${ typeValid ? '-top-full left-full' : 'top-0 left-[70%]'} transition-[top left] duration-200`} src="https://a.trellocdn.com/prgb/assets/3644a080c0c1fc8ab4b6.svg" alt="Hero Success Modal Type" />
          </div>
        </div>
        
        <button
          onClick={ handleCloseModalNewProject }
          className='absolute top-4 right-4 text-3xl text-gray-500 rounded-full p-1 hover:text-black transition-colors'
        >
          <CgClose />
        </button>
      </div>
    </ReactModal>
  )
}
