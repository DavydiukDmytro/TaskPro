import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { register } from '../../store/user/operationAuth';
import css from './RegisterForm.module.css';

const schema = object({
  name: string().min(2).required(),
  email: string().email().required(),
  password: string().min(6).max(12).required(),
});

const initialValuesForm = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValuesForm}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <div className={css.form__field}>
          <label htmlFor="name" className={css.form__label}>
            Name
          </label>
          <Field
            autoComplete="name"
            type="text"
            name="name"
            className={css.form__input}
          />
        </div>

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
          Register Now
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
