import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {}, Validations = {} ) => {

  const [ formState, setFormState ] = useState( initialForm );
  const [ formValidations, setFormValidations ] = useState( {} );

  useEffect(() => {
    createValidators();
  }, [ formState ]);

  useEffect(() => {
    setFormState(initialForm);
  }, [ initialForm ]);

  const isFormValid = useMemo( () => {
    return Object.keys( formValidations ).every( key => formValidations[key] === null );
  }, [ formValidations ] );

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  const handleCustomChange = ( name, value ) => {
    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  const handleResetForm = () => {
    setFormState(initialForm);
  }

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys( Validations )) {
      const [ fn, errorMessage ] = Validations[ formField ];
      formCheckedValues[ `${ formField }Valid` ] = fn( formState[ formField ], formState.password ) ? null : errorMessage;
      setFormValidations( formCheckedValues );
    }
  }

  return {
    ...formState,
    formState,
    ...formValidations,
    formValidations,
    isFormValid,

    handleInputChange,
    handleCustomChange,
    handleResetForm,
  };
};