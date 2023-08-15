import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { updateColumnById } from 'store/boards/operationsBoards';
import { object, string } from 'yup';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './EditColumn.module.css';

export const EditColumn = ({ handleClose, id, title = '' }) => {
  const dispatch = useDispatch();
  const initialValues = {
    title,
  };

  const schema = object({
    title: string().trim().required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    dispatch(updateColumnById({ id, ...values }));
    handleClose();
    resetForm();
  };

  return (
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
          <p className={css.text}>Edit column</p>
          <div className={css.form__field}>
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
          {/* <div className={css.wrapButton}> */}
          <button type="submit" className={css.button}>
            <svg width="28px" height="28px" className={css.icon}>
              <use href={svgSprite + '#icon-plus'} />
            </svg>
            Edit
          </button>
          {/* </div> */}
        </Form>
      )}
    </Formik>
  );
};
