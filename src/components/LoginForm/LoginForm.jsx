import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../store/user/operationAuth';
import css from './LoginForm.module.css';
import { getIsLoggin } from 'store/user/selectorsAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const initialValuesForm = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const isLogIn = useSelector(getIsLoggin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogIn) {
      navigate('/home', { replace: true });
    }
  }, [isLogIn, navigate]);

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValuesForm} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.form__field}>
          <label htmlFor="email" className={css.form__label}>
            Email
          </label>
          <Field
            autoComplete="email"
            type="email"
            name="email"
            className={css.form__input}
          />
        </div>

        <div className={css.form__field}>
          <label htmlFor="password" className={css.form__label}>
            Password
          </label>
          <Field type="password" name="password" className={css.form__input} />
        </div>

        <button type="submit" className={css.form__button}>
          Log In Now
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
