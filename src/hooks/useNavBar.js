import { useEffect, useRef, useState } from 'react';
import { openModalNewBoard, openModalNewProject, startActiveProject, startDesactiveBoard, toggleSideBarUser, toggleSideBarWork } from '../store';
import { useAuth, useProject, useUi } from './';

export const useNavBar = () => {
  const { user, dispatch } = useAuth();
  const { sideBarUser, sideBarWork } = useUi();
  const { projects, isLoadingProjects, activeProject } = useProject();

  const [ showMenu, setShowMenu ] = useState(false);
  const menuOptionsRef = useRef(null);
  const btnMenuOptionsRef = useRef(null);

  const [ showProjects, setShowProjects ] = useState(false);
  const projectsRef = useRef(null);
  const btnProjectsRef = useRef(null);

  const [ showUserProfile, setShowUserProfile ] = useState(false);
  const userProfileRef = useRef(null);
  const btnUserProfileRef = useRef(null);

  const lastURL = localStorage.getItem("lastURL") || `/project/u/${ user?.username }`;

  useEffect(() => {
    function handleClickHiddenOptions({ target }) {
      const isHidden = menuOptionsRef.current && !menuOptionsRef.current.contains(target) && !btnMenuOptionsRef.current.contains(target);
      if (isHidden) setShowMenu(false);

      const isHiddenProjects = projectsRef.current && !projectsRef.current.contains(target) && !btnProjectsRef.current.contains(target);
      if (isHiddenProjects) setShowProjects(false);

      const isHiddenUserProfile = userProfileRef.current && !userProfileRef.current.contains(target) && !btnUserProfileRef.current.contains(target);
      if (isHiddenUserProfile) setShowUserProfile(false);
    }
    document.addEventListener("mousedown", handleClickHiddenOptions);
    return () => {
      document.removeEventListener("mousedown", handleClickHiddenOptions);
    }
  }, [ menuOptionsRef, btnMenuOptionsRef, projectsRef, btnProjectsRef, userProfileRef, btnUserProfileRef ]);

  const handleClickModalProject = () => {
    dispatch( openModalNewProject() );
    setShowMenu(false);
  }

  const handleClickModalBoard = () => {
    dispatch( openModalNewBoard() );
    setShowMenu(false);
  }

  const handleShowSideBarUser = () => dispatch( toggleSideBarUser() );
  const handleToggleSideBarWork = () => dispatch( toggleSideBarWork() );

  const handleToggleMenu = () => setShowMenu(!showMenu);
  const handleClickShowProjects = () => setShowProjects(!showProjects);
  const handleShowUserProfile = () => setShowUserProfile(!showUserProfile);

  const handleClickTitleNavBar = () => dispatch( startDesactiveBoard() );

  return {
    showMenu,
    showProjects,
    showUserProfile,
    menuOptionsRef,
    btnMenuOptionsRef,
    projectsRef,
    btnProjectsRef,
    userProfileRef,
    btnUserProfileRef,

    user,
    sideBarUser,
    sideBarWork,
    projects,
    isLoadingProjects,
    activeProject,
    lastURL,

    handleClickModalProject,
    handleClickModalBoard,
    handleShowSideBarUser,
    handleToggleSideBarWork,
    handleToggleMenu,
    handleClickShowProjects,
    handleShowUserProfile,
    handleClickTitleNavBar,
  }
}