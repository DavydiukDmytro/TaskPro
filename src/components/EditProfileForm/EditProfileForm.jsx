import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/user/operationAuth';
import defaultPhoto from '../../assets/svg/symbol-defs.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getUser } from 'store/user/selectorsAuth';
import css from './EditProfileForm.module.css';

export const EditProfileForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const [userPhoto, setUserPhoto] = useState(user.user);
  const [showPassword, setShowPassword] = React.useState(false);
  const initialValues = {
    name: user.name,
    avatarUrl: user.avatarUrl || defaultPhoto,
    email: user.email,
    password: user.password,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Name is required'),
    email: Yup.string().email('Enter your email correct').required('Required'),
    password: Yup.string()
      .matches(/^[a-zA-Z0-9_]+$/, 'Enter your password correct')
      .min(8)
      .max(64),
  });

  const handlePhotoChange = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', event => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setUserPhoto(reader.result);
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('file', userPhoto);
    });
    input.click();
  };

  const handleSubmit = (user, { resetForm }) => {
    const updatedUser = { ...user, avatarUrl: userPhoto };
    dispatch(updateUser(updatedUser));
    onClose();
    resetForm();
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
        <div
          className={css.photo}
          type="file"
          name="file"
          id="avatarURL"
          onClick={handlePhotoChange}
        >
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
