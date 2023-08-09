const { object, string } = require('yup');

export const registrationSchema = object({
  name: string()
    .trim()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{};':",.<>?/~\\-]+$/,
      'Please enter a valid name'
    )
    .min(2, "Ім'я повинно містити щонайменше 2 знаки")
    .max(32, 'The name must contain at least 2 characters')
    .required('Name is required'),
  email: string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Enter your email correct'
    )
    .email('Enter your email correct')
    .required('Email is required'),
  password: string()
    .trim()
    .matches(
      /^[a-zA-Z0-9!@#$%№^&*)(_+-=[{}|`"'”;:,./<>?£]+$/,
      'Enter your password correct'
    )
    .min(8, 'The password must be at least 8 characters long')
    .max(64, 'The password can contain a maximum of 64 characters')
    .required('Password is required'),
});
