import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
// import {ModalNeedHelp  } from '...';
import { object, string } from 'yup';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './ModalNeedHelp.module.css';

const schema = object({
  email: string().trim().email('Enter your email correct').required('Required'),
  textarea: string().trim().required('Required'),
});

const initialValuesForm = {
  email: '',
  textarea: '',
};

export const ModalNeedHelp = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    // await dispatch(ModalNeedHelp(values));
    resetForm();
  };

  return (
    <div className={css.wrapper}>
        <button className={css.buttonClose}>
          <svg width={18} height={18}>
            <use className={css.svg} href={svgSprite + '#icon-x-close'} />
          </svg>
        </button>
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
                name="textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.textarea}
              />
              {touched.textarea && errors.textarea && (
                <p className={css.form__error}>{errors.textarea}</p>
              )}
            </div>
            <button type="submit" className={css.button}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};


export * from './ModalNeedHelp';
