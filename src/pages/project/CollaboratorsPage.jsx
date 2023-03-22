import React, { useEffect } from 'react'

export const CollaboratorsPage = () => {
  
  useEffect(() => {
    document.title = 'Miembros | TeamTasker';
  }, [])

  return (
    <div>Collaborators</div>
  )
}
