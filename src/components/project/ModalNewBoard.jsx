import { useEffect } from 'react';
import ReactModal from 'react-modal';
import Select from 'react-select';
import { useForm, useProject, useUi } from '../../hooks';
import { closeModalNewBoard, startSavedBoard } from '../../store';
import { initialNewBoard, validationsNewBoard} from '../../data';
import { stylesSelect } from '../../styles';

ReactModal.setAppElement("#root");

export const ModalNewBoard = () => {

  const { modalNewBoard } = useUi();
  const { loading, projects, activeProject, dispatch } = useProject();
  const projectOptions = projects.map( project => ({ value: project._id, label: project.name}) );
  const defaultOption = projectOptions.find( option => option.value === activeProject?._id );
  
  const { 
    formState, title, background, project, isFormValid, handleInputChange, handleCustomChange, handleResetForm
  } = useForm( initialNewBoard, validationsNewBoard );

  useEffect(() => {
    handleCustomChange( 'project',( activeProject?._id || defaultOption?.value) )
  }, [ title])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ( !isFormValid ) return;
    dispatch( startSavedBoard(formState) )
    //handleResetForm();
  }

  const handleRequestClose = () => {
    dispatch( closeModalNewBoard() );

    setTimeout(() => {
      handleResetForm();
    }, 500);
  }

  return (
    <ReactModal
      isOpen={ modalNewBoard }
      onRequestClose={ handleRequestClose }
      closeTimeoutMS={ 300 }
      overlayClassName='modal'
      className={`max-w-[40rem] w-[95%] bg-[#292F36] text-white rounded-md overflow-hidden`}
    >
      <div className='max-w-lg mx-auto py-6 px-4'>
        <div className='text-center pt-8'>
          <h2 className='text-xl font-bold'>Crear tablero</h2>
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
                id="title"
                name="title"
                value={ title }
                onChange={ handleInputChange }
                placeholder=" "
                autoComplete="off"
              />
              
              <label
                htmlFor="title"
                className={`inputs__label text-gray-300 absolute bg-[#292F36] px-1 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
              >Titulo del tablero</label>
            </div>

            <span className='text-sm block text-start text-gray-400 pt-1'>Digite el nombre de su proyecto <small className='text-red-500 text-sm'>*</small></span>
          </div>

          <div>
            <Select
              styles={ stylesSelect }
              onChange={ ({ value }) => handleCustomChange( 'project', value ) }
              classNamePrefix='select'
              defaultValue={ ( defaultOption) }
              options={ projectOptions }
            />

            <span className='text-sm block text-start text-gray-400 pt-1'>Escoga el tipo de proyecto que va a desarrollar <small className='text-red-500 text-sm'>*</small></span>
          </div>

          <div className="w-full pb-4 group">
            <div className={`textarea border-gray-400 text-gray-600 hover:border-[#5FA7F0] relative w-full border-[.15rem] rounded-md transition-colors ease-in-out focus-within:border-[#5FA7F0]`} >

              <textarea
                className={`textarea__input w-full px-2 py-3 outline-none text-white font-normal bg-inherit resize-none`}
                rows="4"
                id="background"
                name="background"
                value={ background }
                onChange={ handleInputChange }
                placeholder=" "
                autoComplete="off"
              />
              
              <label
                htmlFor="background"
                className={`textarea__label text-gray-300 absolute bg-[#292F36] px-1 text-base top-[5%] left-2 font-medium focus-within:top-1/2 transition-[top transform] duration-200 cursor-text`}
              >Color</label>
            </div>

            <span className='text-sm block text-start text-gray-400 pt-1'>Escoga un color</span>
          </div>

          <button
            className={`${ isFormValid ? 'bg-[#5FA7F0] text-white hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed text-gray-300'} rounded-md py-3 font-medium`}
            disabled={ !isFormValid }
          >
            { loading === 'loading Saved Board' ? 'Creando proyecto...' : 'Crear proyecto' }
          </button>
        </form>
      </div>
    </ReactModal>
  )
}
