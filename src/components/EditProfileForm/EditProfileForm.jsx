import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/user/operationAuth';
import defaultPhoto from '../../assets/svg/symbol-defs.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import css from './EditProfileForm.module.css';

export const EditProfileForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [userPhoto, setUserPhoto] = useState(user.user);
  const [showPassword, setShowPassword] = React.useState(false);

  const initialValues = {
    name: user.name,
    avatarUrl: user.avatarUrl || defaultPhoto,
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
  const handleSubmit = (user, { resetForm }) => {
    const updatedUser = {
      ...user,
      avatarUrl: userPhoto,
    };
    dispatch(updateUser(updatedUser));
    resetForm();
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <p className={css.form__title}>Edit profile</p>
        <div className={css.photo} onClick={openModal}>
          {userPhoto ? (
            <img
              className={css.photo__img}
              src={userPhoto}
              alt="ProfilePhoto"
            />
          ) : (
            <svg width={68} height={68}>
              <use
                className={css.svg}
                href={defaultPhoto + '#icon-Group-1456q'}
              />
            </svg>
          )}
        </div>

        <div className={css.input__wrapper}>
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

        <div className={css.input__wrapper}>
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

        <div className={css.input__wrapper}>
          <label htmlFor="password"></label>
          <Field
            className={css.input__field}
            id="password"
            name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            style={{ position: 'relative' }}
          />

          <span className={css.eye} onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
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
