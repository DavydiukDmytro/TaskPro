import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/user/operationAuth';
import photo from '../../assets/images/defaultuserimg/user.jpg';
import css from './EditProfileForm.module.css';

export const EditProfileForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [userPhoto, setUserPhoto] = useState(photo);

  const initialValues = {
    name: user.name,
    photo: user.photo || photo,
    email: user.email,
    password: user.password,
  };

  const EMAIL_REGX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const PASSWORD_REGEX =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,64}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(32, 'Too Long!')
      .required('Name is required'),
    email: Yup.string()
      .matches(EMAIL_REGX, 'Invalid email address')
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .matches(PASSWORD_REGEX, 'Please enter a strong password')
      .required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const updatedUser = {
      ...values,
      photo: userPhoto,
    };
    dispatch(updateUser(updatedUser));
    resetForm();
    onClose();
  };
  const openModal = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', event => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setUserPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    });
    input.click();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <p className={css.form__title}>Edit profile</p>
        <div className={css.photo}>
          <img
            className={css.photo__img}
            src={userPhoto}
            alt="Profile Photo"
            onClick={openModal}
          />
        </div>

        <div className={css.input}>
          <label htmlFor="name"></label>
          <Field
            className={css.input__field}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage className={css.errors} name="name" component="div" />
        </div>

        <div className={css.input}>
          <label htmlFor="email"></label>
          <Field
            className={css.input__field}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage className={css.errors} name="email" component="div" />
        </div>

        <div className={css.input}>
          <label htmlFor="password"></label>
          <Field
            className={css.input__field}
            type="password"
            id="password"
            name="password"
            // placeholder="Password"
          />
          <ErrorMessage
            className={css.errors}
            name="password"
            component="div"
          />
        </div>

        <button className={css.form__button} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};
