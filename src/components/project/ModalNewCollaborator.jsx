import ReactModal from 'react-modal';
import { useForm, useProject, useUi } from '../../hooks';
import { closeModalNewCollaborator } from '../../store';
import { initialNewCollaborator, validationsNewCollaborator } from '../../data';

ReactModal.setAppElement("#root");

export const ModalNewCollaborator = () => {

  const { modalNewCollaborator } = useUi();
  const { loading, activeProject, dispatch } = useProject();
  

  const handleChangeSearchCollaborators = ({ target }) => {
    console.log(target)
  }

  const handleRequestClose = () => {
    dispatch( closeModalNewCollaborator() );

    /* setTimeout(() => {
      handleResetForm();
    }, 500); */
  }

  return (
    <ReactModal
      isOpen={ modalNewCollaborator }
      onRequestClose={ handleRequestClose }
      closeTimeoutMS={ 300 }
      overlayClassName='modal'
      className={`max-w-[40rem] w-[95%] bg-[#191919] text-white rounded-[.3rem] px-10`}
    >
      <div className='pb-8 px-4'>
        <div className='py-8'>
          <h2 className='text-xl'>
            Añadir un colaborador a <span className='text-white font-bold'>{ activeProject?.name }</span>
          </h2>
        </div>

        <div className="w-full relative">
          <div className={`inputs border-gray-400 text-gray-600 hover:border-[#5FA7F0] relative w-full border-[.15rem] rounded-[.25rem] transition-colors ease-in-out focus-within:border-[#5FA7F0]`} >
            <input
              className={`inputs__input w-full px-2 py-2 outline-none text-white font-normal bg-inherit resize-none`}
              type="email"
              id="email"
              name="email"
              onChange={ handleChangeSearchCollaborators }
              placeholder=" "
              autoComplete="off"
            />
            
            <label
              htmlFor="email"
              className={`inputs__label text-gray-300 absolute bg-[#191919] px-1 text-base top-[50%] transform -translate-y-1/2 left-2 font-medium focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
            >
              Email del colaborador
            </label>
          </div>

          <div className='absolute top-[110%] w-full bg-white p-2 text-black'>
            <div>Resultado</div>
            <div>Resultado</div>
            <div>Resultado</div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}
