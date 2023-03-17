import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { FormHook, FormState, FormValidations, FormValidator } from "../interfaces";


export const useForm = (initialForm: FormState = {}, formValidations: FormValidations = {}): FormHook => {

  const [formState, setFormState] = useState<FormState>(initialForm);
  const [formValidator, setFormValidator] = useState<FormValidator>({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo<boolean>(() => {
    return Object.keys(formValidator).every(key => formValidator[key] === null);
  }, [formValidator]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date, name: string): void => {
    setFormState({
      ...formState,
      [name]: date,
    });
  }

  const handleResetForm = (): void => {
    setFormState(initialForm);
  };

  const createValidators = (): void => {
    const formCheckedValues: FormValidator = {};

    for (const formField of Object.keys(formValidations)) {
      const [ fn, errorMessage ] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn( formState[formField], formState.password ) ? null : errorMessage;
      
      setFormValidator(formCheckedValues);
    }
  };

  return {
    ...formState,
    formState,
    ...formValidator,
    formValidator,
    isFormValid,
    
    handleInputChange,
    handleDateChange,
    handleResetForm,
  };
};