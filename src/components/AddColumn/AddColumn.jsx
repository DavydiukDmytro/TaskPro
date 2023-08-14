import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addColumn } from 'store/boards/operationsBoards';
import { object, string } from 'yup';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './AddColumn.module.css';

export const AddColumn = ({ handleClose, boardId }) => {
  const dispath = useDispatch();
  const initialValues = {
    title: '',
  };

  const schema = object({
    title: string().trim().required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    dispath(addColumn({ boardId: boardId, ...values }));
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
          <div className={css.form__field}>
            <p className={css.text}>Add column</p>
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
  );
};
