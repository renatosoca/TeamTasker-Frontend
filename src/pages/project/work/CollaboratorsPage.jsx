import { useEffect } from 'react'
import { ProjectLayout } from '../../../layouts';

export const CollaboratorsPage = () => {
  
  useEffect(() => {
    document.title = 'Colaboradores | TeamTasker';
  }, [])

  return (
    <ProjectLayout>Collaborators</ProjectLayout>
  )
}
