import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { openModalNewBoard, openModalNewProject, toggleSideBarUser } from "../store";

export const useNavBar = () => {
  const dispatch = useDispatch();

  const [ showMenu, setShowMenu ] = useState(false);
  const [ showProjects, setShowProjects ] = useState(false);
  const [ showUserProfile, setShowUserProfile ] = useState(false);

  const menuOptionsRef = useRef(null);
  const btnMenuOptionsRef = useRef(null);

  const projectsRef = useRef(null);
  const btnProjectsRef = useRef(null);
  
  const userProfileRef = useRef(null);
  const btnUserProfileRef = useRef(null);

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

  const handleToggleMenu = () => setShowMenu(!showMenu);
  const handleClickShowProjects = () => setShowProjects(!showProjects);
  const handleShowUserProfile = () => setShowUserProfile(!showUserProfile);

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

    handleClickModalProject,
    handleClickModalBoard,
    handleShowSideBarUser,
    handleToggleMenu,
    handleClickShowProjects,
    handleShowUserProfile
  }
}