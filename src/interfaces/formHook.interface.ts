import { ChangeEvent } from "react";

export type FormState = { [key: string]: string | any; }
export type FormValidations = { [key: string]: [ ( value: string, password?: string ) => boolean, string ]; }
export type FormValidator = { [key: string]: string | null; }

export interface FormHook {
  formState: FormState;
  formValidator: FormValidator;
  isFormValid: boolean;
  
  handleInputChange: ( event: ChangeEvent<HTMLInputElement> ) => void;
  handleDateChange: ( date: Date, changing: string ) => void;
  handleResetForm: () => void;
}