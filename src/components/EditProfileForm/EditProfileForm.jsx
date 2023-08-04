import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import css from './EditProfileForm.module.css';

export const EditProfileForm = user => {
  const dispatch = useDispatch();

  const initialValues = {
    name: user.name || '',
    phone: user.phone || '',
    email: user.email || '',
    password: user.password || '',
  };
  const EMAIL_REGX = `^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/`;
  const PASSWORD_REGEX =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,64}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(32, 'Too Long!')
      .required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string()
      .matches(EMAIL_REGX, 'Invalid email address')
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .matches(PASSWORD_REGEX, 'Please enter a strong password')
      .required('Password is required'),
  });

  const handleSubmit = async values => {
    dispatch(updateUserOnBackend(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
