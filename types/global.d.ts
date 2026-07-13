import {
  Control,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

declare global {
  type SignUpFormData = {
    fullName: string;
    email: string;
    password: string;
    country: string;
    investmentGoals: string;
    riskTolerance: string;
    preferredIndustry: string;
  };

  type SignInFormData = {
    email: string;
    password: string;
  };

  type FormInputProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    placeholder: string;
    type?: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    validation?: RegisterOptions<T>;
    disabled?: boolean;
    value?: string;
  };

  type Option = {
    value: string;
    label: string;
  };

  type SelectFieldProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    placeholder: string;
    options: readonly Option[];
    control: Control<T>;
    error?: FieldError;
    required?: boolean;
    showFlags?: boolean;
  };
}

export {};
