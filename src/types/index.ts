export interface UsernameProps {
  id: string;
  type: FieldType.Username;
  placeholder: string;
  required: boolean;
  minLength: number;
  maxLength: number;
}

export interface PasswordProps {
  id: string;
  type: FieldType.Password;
  placeholder: string;
  required: boolean;
  minLength: 3;
  maxLength: 15;
}

export interface BirthdayProps {
  id: string;
  type: FieldType.Birthday;
  placeholder: string;
  required: boolean;
  minDate: Date;
  maxDate: Date;
}

export type FieldProps = BirthdayProps | UsernameProps | PasswordProps;

export enum FieldType {
  Username = "username",
  Birthday = "birdhday",
  PhoneNumber = "phoneNumber",
  Password = "password"
}
