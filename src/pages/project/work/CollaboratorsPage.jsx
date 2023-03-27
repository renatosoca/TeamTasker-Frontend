import { useEffect } from 'react'
import { HeaderProjectWork } from '../../../components';
import { ProjectLayout } from '../../../layouts';

export const CollaboratorsPage = () => {
  
  useEffect(() => {
    document.title = 'Colaboradores | TeamTasker';
  }, [])

  return (
    <ProjectLayout>
      <HeaderProjectWork />

      <h1>colaboradores</h1>
    </ProjectLayout>
  )
}
