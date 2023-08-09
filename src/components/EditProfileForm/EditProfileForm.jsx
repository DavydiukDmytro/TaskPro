import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/user/operationAuth';
import defaultPhoto from '../../assets/svg/symbol-defs.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import css from './EditProfileForm.module.css';
import { getUser } from 'store/user/selectorsAuth';
import { updateUserSchema } from 'utils/validation';

export const EditProfileForm = ({ onClose }) => {
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  const [userPhoto, setUserPhoto] = useState(user.avatarUrl);
  const [userPreview, setUserPreview] = useState(user.avatarUrl);
  const [showPassword, setShowPassword] = React.useState(false);
  const initialValues = {
    name: user.name,
    avatarUrl: user.avatarUrl || defaultPhoto,
    email: user.email,
    password: user.password,
  };

  const handlePhotoChange = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', event => {
      const file = event.target.files[0];
      const reader = new FileReader();
      setUserPhoto(file);
      reader.onload = () => {
        setUserPreview(reader.result);
      };
      reader.readAsDataURL(file);
    });
    input.click();
  };
  const handleSubmit = (user, { resetForm }) => {
    const formData = new FormData();

    let updateData = {};
    if (!user.password) {
      updateData.email = user.email;
      updateData.name = user.name;
    } else {
      updateData.email = user.email;
      updateData.name = user.name;
      updateData.password = user.password;
    }

    formData.append('avatar', userPhoto);
    formData.append('updateInfo', JSON.stringify(updateData));
    dispatch(updateUser(formData));

    resetForm();
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={updateUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <p className={css.form__title}>Edit profile</p>
        <div className={css.photo} onClick={handlePhotoChange}>
          {userPreview ? (
            <img
              className={css.photo__img}
              src={userPreview}
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
