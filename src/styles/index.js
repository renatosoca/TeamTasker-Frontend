export const stylesSelect = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#292F36',
    color: '#fff',
    border: state.isFocused ? '.15rem solid #5FA7F0' : '.15rem solid rgb(156 163 175)',
    borderRadius: '.375rem',
    boxShadow: 'none',
    ':hover': {
      borderColor: '#5FA7F0',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#292F36',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#64B5F6' : null,
    color: state.isSelected ? '#000' : '#fff',
    fontWeight: state.isSelected ? '600' : '400',
    ':hover': {
      backgroundColor: state.isSelected ? null : '#132F4C',
      color: state.isSelected ? null : '#fff',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
    fontWeight: '500',
    padding: '.5rem 0',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'rgb(209 213 219)',
    fontWeight: '600',
    padding: '.5rem 0',
  }),
};