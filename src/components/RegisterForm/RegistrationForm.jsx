import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { register } from '../../store/user/operationAuth';
import css from './RegisterForm.module.css';
import { getIsLoggin } from 'store/user/selectorsAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = object({
  name: string()
    .trim()
    .matches(
      /^[a-zA-Z0-9__\s~!@#$%^&*()_+-=[\{}|;’:”,./<>?£]+$/,
      'Enter your name correct'
    )
    .min(2)
    .max(16)
    .required('Required'),
  email: string().trim().email('Enter your email correct').required('Required'),
  password: string()
    .trim()
    .matches(/^[a-zA-Z0-9_]+$/, 'Enter your password correct')
    .min(8)
    .max(64)
    .required('Required'),
});

const initialValuesForm = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogIn = useSelector(getIsLoggin);

  useEffect(() => {
    if (isLogIn) {
      navigate('/home', { replace: true });
    }
  }, [isLogIn, navigate]);

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    await dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValuesForm}
      onSubmit={handleSubmit}
      validationSchema={schema}
      validateOnBlur
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
      }) => (
        <Form className={css.form}>
          <Field
            autoComplete="name"
            placeholder="Enter your name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.name}
            className={css.form__input}
          />
          {touched.name && errors.name && (
            <p className={css.form__error}>{errors.name}</p>
          )}
          <Field
            autoComplete="email"
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.email}
            className={css.form__input}
          />
          {touched.email && errors.email && (
            <p className={css.form__error}>{errors.email}</p>
          )}
          <Field
            autoComplete="password"
            placeholder="Enter your password"
            type="text"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.password}
            className={css.form__input}
          />
          {touched.password && errors.password && (
            <p className={css.form__error}>{errors.password}</p>
          )}

          <button type="submit" className={css.form__button}>
            Register Now
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
