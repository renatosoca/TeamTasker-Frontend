import { useEffect } from "react";
import { HeaderProjectWork } from "../../../components";
import { ProjectLayout } from "../../../layouts";

export const SettingsPage = () => {
  
  useEffect(() => {
    document.title = 'Configuración | TeamTasker';
  }, [])

  return (
    <ProjectLayout>
      <HeaderProjectWork />

      <h1>Settings</h1>
    </ProjectLayout>
  )
}
