import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import Select from 'react-select';
import { MdOutlineElectricBolt } from 'react-icons/md';
import { useForm, useProject, useUi } from '../../hooks';
import { closeModalNewBoard, startSavedBoard } from '../../store';
import { customBgImageModalBoard, customColorModalBoard, initialNewBoard, validationsNewBoard} from '../../data/data';
import { stylesSelectNewBoard } from '../../styles/stylesSelects';
import { LoadingSpinner } from './LoadingSpinner';
import { CgClose } from 'react-icons/cg';

ReactModal.setAppElement("#root");

export const ModalNewBoard = () => {

  const { modalNewBoard } = useUi();
  const { isLoadingSavedBoard, projects, activeProject, dispatch } = useProject();
  const projectOptions = projects.map( project => ({ value: project._id, label: project.name}) );
  const defaultOption = projectOptions.find( option => option.value === activeProject?._id );
  const [ formValues, setFormValues ] = useState(initialNewBoard);
  
  const {
    formState, title, background, isFormValid, handleInputChange, handleCustomChange, handleResetForm
  } = useForm( formValues, validationsNewBoard );

  useEffect(() => {
    if ( activeProject?._id !== '' ) {
      setFormValues({...formValues, project: activeProject?._id });
    } else {
      setFormValues({...formValues, project: defaultOption?.value ?? '' });
    }
  }, [activeProject])
  
  useEffect(() => {
    handleCustomChange( 'background', background || customBgImageModalBoard[0] );
  }, [ background, title, activeProject ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ( !isFormValid ) return;
    dispatch( startSavedBoard(formState) );
    handleResetForm();
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
      closeTimeoutMS={ 200 }
      overlayClassName='modal'
      className={`relative max-w-[30rem] w-[95%] bg-[#161B22] text-white rounded-md`}
    >
      <div className='max-w-lg mx-auto py-6'>
        <div className='text-center border-b border-gray-400 px-4'>
          <h2 className='text-xl font-bold font-jakarta pb-4'>Crea tu tablero</h2>
        </div>

        <div 
          className={`flex justify-center max-w-[15rem] w-full mx-auto px-6 py-6 rounded mt-6`} 
          style={{ 
            backgroundImage: `${ background.includes('https') ? `url(${background})` : '' }`,
            backgroundColor: `${background.includes('#') ? background : ''}`,
            backgroundSize: 'cover',
          }}
        >
          <img className='opacity-70' src="https://a.trellocdn.com/prgb/assets/14cda5dc635d1f13bc48.svg" alt="Imagen muestra" />
        </div>

        <form
          onSubmit={ handleSubmit }
          className='flex flex-col gap-6 py-4 px-4'
        >
          <div className='flex flex-col gap-2'>
            <span>Fondos</span>
            <ul className='flex gap-[2%] w-full h-[4rem]'>
              {customBgImageModalBoard.map( (image, i) => (
                  <li 
                    key={ i }
                    className='w-[23.5%] rounded overflow-hidden'
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                  >
                    <button
                      type='button'
                      onClick={ () => handleCustomChange( 'background', image ) }
                      className={`flex justify-center items-center rounded w-full h-full ${ background === image ? ' bg-black/40' : '' }`}
                    >
                      { background === image && <MdOutlineElectricBolt className='text-xl' />}
                    </button>
                  </li>
                ))}
            </ul>

            <ul className='flex gap-2 h-[2rem]'>
              {customColorModalBoard.map( (color) => (
                <li 
                  key={ color }
                  style={{ backgroundColor: color }}
                  className='w-full h-full rounded'
                >
                  <button
                    type='button'
                    onClick={ () => handleCustomChange( 'background', color ) }
                    className={`flex items-center justify-center w-full h-full ${ background === color ? ' bg-black/40' : '' } `}
                  >
                    { background === color && <MdOutlineElectricBolt className='text-base' />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

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
                className={`inputs__label text-gray-300 absolute bg-[#161B22] px-1 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
              >Titulo del tablero</label>
            </div>

            <span className='text-sm block text-start text-gray-400 pt-1'>Ingrese el nombre de su tablero<small className='text-red-500 text-sm'>*</small></span>
          </div>

          <div>
            <Select
              styles={ stylesSelectNewBoard }
              onChange={ ({ value }) => handleCustomChange( 'project', value ) }
              classNamePrefix='select'
              //value={ defaultOption|| projectOptions[0] }
              defaultValue={ ( defaultOption || projectOptions[0]) }
              options={ projectOptions }
            />

            <span className='text-sm block text-start text-gray-400 pt-1'>Seleccione su proyecto <small className='text-red-500 text-sm'>*</small></span>
          </div>

          <button
            className={`flex gap-2 justify-center items-center ${ isFormValid ? 'bg-[#5FA7F0] text-white hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed text-gray-300'} rounded-md py-3 font-medium`}
            disabled={ !isFormValid }
          >
            { isLoadingSavedBoard ? <LoadingSpinner title={'Creando Tablero'} /> : 'Crear Tablero' }
          </button>
        </form>

        <button
          onClick={ handleRequestClose }
          className='absolute top-4 right-4 text-3xl text-gray-600 rounded-full p-1 hover:text-white transition-colors'
        >
          <CgClose />
        </button>
      </div>
    </ReactModal>
  )
}
