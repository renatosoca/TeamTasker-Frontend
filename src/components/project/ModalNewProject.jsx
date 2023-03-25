import ReactModal from 'react-modal';
import Select from 'react-select';
import { useModal } from '../../hooks';
import { closeModalNewProject } from '../../store';

ReactModal.setAppElement("#root");

export const ModalNewProject = () => {

  const newViews = [
    {
      value: '#292F36',
      label: 'Ingenieria',
    },
    {
      value: 'new1',
      label: 'Tecnologia',
    },
    {
      value: 'new2',
      label: 'Marketing',
    },
    {
      value: 'new3',
      label: 'Ventas',
    },
  ]

  const { modalNewProject, dispatch } = useModal();

  const handleCloseModal = () => {
    dispatch( closeModalNewProject() );
  }

  return (
    <ReactModal
      isOpen={ modalNewProject }
      onRequestClose={ handleCloseModal }
      closeTimeoutMS={ 300 }
      overlayClassName='modal'
      className={`max-w-[80rem] w-[95%] grid grid-cols-2 bg-[#292F36] text-white rounded-md`}
    >
      <div className='max-w-md mx-auto'>
        <div className='text-center'>
          <h2 className='text-xl font-bold'>Crea tu proyecto en unos simples pasos</h2>
          <p>Organiza tus proyectos de manera facil, invita a tus colaboradores para que puedan participar</p>
        </div>

        <form
          className='flex flex-col gap-4 py-4'
        >
          <div className="w-full">
            <span className='text-sm block text-end text-gray-400 pb-1'>Este es el nombre de tu proyecto</span>

            <div className={`form__group ${(false) ? 'form__group-error border-red-400 text-red-400 hover:border-red-500' : 'border-gray-400 text-gray-600 hover:border-[#5FA7F0]'} relative w-full border-[.15rem] rounded-md transition-colors ease-in-out focus-within:border-[#5FA7F0]`} >

              <input
                className={`form__input ${false? 'form__input-error': ''} w-full px-2 py-3 outline-none text-white font-normal bg-inherit resize-none`}
                type="text"
                name="name"
                id="name"
                placeholder=" "
                autoComplete="off"
              />
              
              <label
                htmlFor="name"
                className={`form__label ${(false) ? 'text-red-400' : 'text-gray-300'} absolute bg-[#292F36] px-1 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
              >Nombre del Proyecto</label>
            </div>

            <span className={`form__span ${(false) ? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} >{ 'Hello' }</span>
          </div>

          <Select
            className=''
            classNames='bg-black'
            classNamePrefix='hola'
            placeholder='Seleccionar...'
            options={ newViews }
          />
        </form>
      </div>

      <div className='bg-[url(https://a.trellocdn.com/prgb/assets/df0d81969c6394b61c0d.svg)] bg-cover bg-center w-full h-full'>
      </div>
    </ReactModal>
  )
}
