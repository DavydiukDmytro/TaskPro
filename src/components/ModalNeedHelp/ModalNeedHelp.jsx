import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import css from './ModalNeedHelp.module.css';
import { support } from 'store/support/operationSupport';

const schema = object({
  email: string().trim().email('Enter your email correct').required('Required'),
  message: string().trim().required('Required'),
});

const initialValuesForm = {
  email: '',
  message: '',
};

export const ModalNeedHelp = ({ handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(support(values));
    handleClose();
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
          <div className={css.form__field}>
            <p className={css.form__text}>Need Help</p>
            <Field
              className={css.form__input}
              autoComplete="email"
              placeholder="Email adress"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.email}
            />
            {touched.email && errors.email && (
              <p className={css.form__error}>{errors.email}</p>
            )}
          </div>
          <div className={css.form__field}>
            <Field
              className={css.form__textarea}
              as="textarea"
              rows="5"
              placeholder="Comment"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.message}
            />
            {touched.message && errors.message && (
              <p className={css.form__error}>{errors.message}</p>
            )}
          </div>
          <button type="submit" className={css.button}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export * from './ModalNeedHelp';
