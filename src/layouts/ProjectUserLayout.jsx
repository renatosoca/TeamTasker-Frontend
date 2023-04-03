import { Outlet } from 'react-router-dom';
import { ModalNewBoard, ModalNewProject, NavBar, SideBarUser } from '../components';
import { useUi } from '../hooks';
import { desactiveSideBarUser } from '../store';

export const ProjectUserLayout = () => {

  const { sideBarUser, dispatch } = useUi();

  const handleDesactiveSideBarUSer = () => {
    dispatch( desactiveSideBarUser() );
  }
  
  return (
    <div className='bg-[#0D1117] text-white flex flex-col overflow-hidden'>
      <NavBar location={'user'} />

      <div className='relative w-full h-[calc(100vh-3.2rem)] overflow-y-auto flex flex-col justify-start'>
        <div className='flex-1 flex items-center h-full overflow-y-auto'>
          <div className='flex-1 flex justify-center items-start w-full h-full overflow-y-scroll scrollbar'>
            <SideBarUser /> 

            <Outlet />
            
            <span 
              onClick={ handleDesactiveSideBarUSer } 
              className={`absolute 3xs:block 3xs:opacity-0 3xs:select-none 3xs:pointer-events-none ${sideBarUser ? 'top-0 bottom-0 left-0 right-0 bg-black/40 z-[0] opacity-100' : '-z-50 opacity-0'} transition-all`}
            ></span>
          </div>
        </div>
      </div>

      <ModalNewProject />
      <ModalNewBoard />
    </div>
  )
}
