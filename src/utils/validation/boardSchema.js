import { object, string } from 'yup';

export const boardSchema = object({
  title: string().min(3).trim().required('Title is required'),
  icon: string(),
  background: string(),
});

export const boardEditSchema = object({
  title: string().min(3).trim(),
  icon: string(),
  background: string(),
});
