import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './EditColumn.module.css';

const initialValues = {
  title: '',
};

const schema = object({
  title: string().trim().required('Required'),
});

export const EditColumn = () => {
  const handleSubmit = async (values, { resetForm }) => {
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
        initialValues={initialValues}
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
        }) => (
          <Form className={css.form}>
            <div className={css.form__field}>
              <p className={css.text}>Edit column</p>
              <input
                className={css.form__input}
                autoComplete="title"
                placeholder="Tittle"
                type="text"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
              {touched.title && errors.title && (
                <p className={css.form__error}>{errors.title}</p>
              )}
            </div>
            <div className={css.wrapButton}>
              <button type="submit" className={css.button}>
                <svg width="28px" height="28px" className={css.icon}>
                  <use href={svgSprite + '#icon-plus'} />
                </svg>
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
