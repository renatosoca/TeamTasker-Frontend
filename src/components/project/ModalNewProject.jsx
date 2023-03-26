import ReactModal from 'react-modal';
import Select from 'react-select';
import { initialNewProject, typeProjects, validationsNewProject } from '../../data';
import { useForm, useProject, useUi } from '../../hooks';
import { closeModalNewProject, startSavedProject } from '../../store';
import { stylesSelect } from '../../styles';

ReactModal.setAppElement("#root");

export const ModalNewProject = () => {

  const { modalNewProject, dispatch } = useUi();
  const { loading, dispatch: dispatchProject } = useProject();

  const { 
    formState, name, type, description, isFormValid, handleInputChange, handleCustomChange, handleResetForm
  } = useForm( initialNewProject, validationsNewProject );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ( !isFormValid ) return;
    dispatchProject( startSavedProject(formState) )
    handleResetForm();
  }

  return (
    <ReactModal
      isOpen={ modalNewProject }
      onRequestClose={ () => dispatch( closeModalNewProject() ) }
      closeTimeoutMS={ 300 }
      overlayClassName='modal'
      className={`max-w-[80rem] w-[95%] grid grid-cols-2 bg-[#292F36] text-white rounded-md overflow-hidden`}
    >
      <div className='max-w-lg mx-auto py-6 px-4'>
        <div className='text-center pt-8'>
          <h2 className='text-xl font-bold'>Crea tu proyecto en unos simples pasos</h2>
          <p className='text-gray-400 pt-3 pb-6'>Organiza tus proyectos de manera facil, invita a tus colaboradores para que puedan participar</p>
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
            className={`${ isFormValid ? 'bg-[#5FA7F0] text-white hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed text-gray-300'} rounded-md py-3 font-medium`}
            disabled={ !isFormValid }
          >
            { loading === 'loading' ? 'Creando..' : 'Crear proyecto' }
          </button>
        </form>
      </div>

      <div className='bg-[url(https://a.trellocdn.com/prgb/assets/df0d81969c6394b61c0d.svg)] bg-cover bg-no-repeat w-full h-full'>
      </div>
    </ReactModal>
  )
}
