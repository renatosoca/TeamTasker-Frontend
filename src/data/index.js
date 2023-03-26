export const typeProjects = [
  {
    value: '#292F36',
    label: 'Ingeniería'
  },
  {
    value: '#292F31',
    label: 'Arquitectura'
  },
  {
    value: '#292F32',
    label: 'Urbanismo'
  },
  {
    value: '#292F35',
    label: 'Construcción'
  },
  {
    value: '#292F33',
    label: 'Diseño'
  },
  {
    value: '#292F34',
    label: 'Arte'
  },
  {
    value: '#292F37',
    label: 'Otro'
  }
]

export const initialNewProject = {
  name: '',
  type: '',
  description: '',
}
export const validationsNewProject = {
  name: [ (value) => value.length > 0, 'El nombre es requerido' ],
  type: [ (value) => value.length > 0, 'El tipo es requerido' ],
}