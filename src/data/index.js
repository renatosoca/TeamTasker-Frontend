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

export const initialRegisterUser = {
  name: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}
export 
const validations = {
  name: [ (value) => value.length > 0, 'El nombre es obligatorio' ],
  lastname: [ (value) => value.length > 0, 'El apellido es obligatorio' ],
  username: [ (value) => value.length > 0, 'El nombre de usuario es obligatorio' ],
  email: [ (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(value), 'Ingrese un email válido' ],
  password: [ (value) => value.length > 7, 'Ingrese un mínimo de 8 caracteres' ],
  confirmPassword: [ (value, value2) => (value === value2 || value.length > 7), 'Las contraseñas no coinciden']
}

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
  background: [ (value) => value?.length > 0, 'El color es requerido' ],
  project: [ (value) => value?.length > 0, 'El proyecto es requerido' ],
}

export const initialNewCollaborator = {
  email: '',
}
export const validationsNewCollaborator = {
  email: [ (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(value), 'Ingrese un email válido' ],
}