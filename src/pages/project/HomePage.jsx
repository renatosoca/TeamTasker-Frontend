import React, { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Proyectos | TeamTasker';
  }, [])
  
  return (
    <>
      <h1>Project desde el Outlet</h1>
    </>
  )
}
