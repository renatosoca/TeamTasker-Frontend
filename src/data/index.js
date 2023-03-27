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
export const validationsRegisterUser = {
  name: [ (value) => value.length > 0, 'El nombre es obligatorio' ],
  lastname: [ (value) => value.length > 0, 'El apellido es obligatorio' ],
  username: [ (value) => (/^[a-z0-9_]+$/).test(value) && value.length > 0, 'El nombre de usuario solo puede contener minúsculas, guiones bajos y números' ],
  email: [ (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(value), 'Ingrese un email válido' ],
  password: [ (value) => value.length > 7, 'Ingrese un mínimo de 8 caracteres' ],
  confirmPassword: [ (value, value2) => value === value2 && value.length > 7, 'Las contraseñas no coinciden']
}

export const initialForgotPassword = {
  email: '',
}
export const validationsForgotPassword  = {
  email: [ (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(value), 'Ingrese un email válido' ],
}

export const initialLoginUser = {
  email: '',
  password: '',
}
export const ValidationsLoginUser = {
  email: [ (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(value), 'Ingrese un email válido' ],
  password: [ (value) => value.length > 7, 'Ingrese un mínimo de 8 caracteres' ],
}

export const initialResetPassword = {
  password: '',
}
export const validationsResetPassword = {
  password: [ (value) => (value.length > 7), 'La contraseña debe tener al menos 8 caracteres' ],
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