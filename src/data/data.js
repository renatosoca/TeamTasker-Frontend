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
  username: '',
}
export const validationsNewCollaborator = {
  username: [ (value) => value.length > 2, 'Ingrese 3 carcateres' ],
}

export const customColorModalBoard = [ 
  '#0079BF', 
  '#D29034', 
  '#519839', 
  '#B04632', 
  '#89609E', 
  '#CD5A91', 
  '#4BBF6B', 
  '#00AECC', 
  '#838C91' 
];
export const customBgImageModalBoard = [ 
  'https://plus.unsplash.com/premium_photo-1672931076639-8c4f19a036c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', 
  'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
  'https://images.unsplash.com/photo-1536108978996-128e3e2a9783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
  'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
];

export const customSettingsData = [
  {title: 'Membresía', description: 'La membresia para todos los proyectos es totalmente gratuita y se mantendrá así, puede crear tantos proyectos, tableros, listas y tareas como usted desée.'}, 
  {title: 'Creación de tableros', description: 'Cualquier colaborador puede crear un tablero en este proyecto.'}, 
  {title: 'Eliminación de tableros', description: 'Cualquier colaborador puede eliminar un tablero en este proyecto.'}, 
  {title: 'Agregar colaboradores', description: 'Solo el administrador del proyecto puede agregar colaboradores.'}, 
  {title: 'Créditos', description: 'TeamTasker fue creado por: Renato Soca'}
]