export const typeProjects = [
  {
    value: '#3772FF',
    label: 'Ingeniería'
  },
  {
    value: '#70E4EF',
    label: 'Arquitectura'
  },
  {
    value: '#80FF72',
    label: 'Urbanismo'
  },
  {
    value: '#3E363F',
    label: 'Construcción'
  },
  {
    value: '#FF3E41',
    label: 'Diseño'
  },
  {
    value: '#5AFF15',
    label: 'Arte'
  },
  {
    value: '#6F8F81',
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

export const initialNewBoard = {
  title: '',
  background: '',
  project: '',
}
export const validationsNewBoard = {
  title: [ (value) => value.length > 0, 'El título es requerido' ],
  background: [ (value) => value.length > 0, 'El color es requerido' ],
  project: [ (value) => value.length > 0, 'El proyecto es requerido' ],
}