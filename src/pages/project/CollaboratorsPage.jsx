import { useEffect } from 'react'

export const CollaboratorsPage = () => {
  
  useEffect(() => {
    document.title = 'Colaboradores | TeamTasker';
  }, [])

  return (
    <div>Collaborators</div>
  )
}
