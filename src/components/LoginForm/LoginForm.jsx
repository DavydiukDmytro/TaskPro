import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../store/user/operationAuth';
import css from './LoginForm.module.css';

const initialValuesForm = {
    email: '',
    password: '',
  };

export const LoginForm = () => { const dispatch = useDispatch();

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
