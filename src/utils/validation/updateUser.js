import { object, string } from 'yup';

export const updateUserSchema = object({
  email: string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Email format is incorrect'
    )
    .email('Invalid email'),
  password: string().matches(
    /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\-\\/]{8,64}$/,
    'The password is not correct'
  ),
  name: string()
    .min(2, 'The name must contain at least 2 characters')
    .max(32, 'The name cannot exceed 32 characters'),
});
