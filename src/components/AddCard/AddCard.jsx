import { Calendar } from 'components/Calendar/Calendar';
import { format } from 'date-fns';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addTask } from 'store/boards/operationsBoards';
// import { useDispatch } from 'react-redux';
// import {AddCard  } from '...';
// import {CanedarValue } from '...';
import { object, string } from 'yup';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './AddCard.module.css';

const initialValuesForm = {
  title: '',
  description: '',
  priority: 'none',
  deadline: format(new Date(), 'dd/MM/yyyy'),
};
const schema = object({
  title: string().trim().required('Required'),
  description: string().trim().required('Required'),
  priority: string().trim().required('Required'),
  deadline: string().trim().required('Required'),
});

export const AddCard = ({ handleClose, columnId }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    await dispatch(addTask({ columnId, ...values }));
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
            <p className={css.text}>Add Card</p>
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
          <div className={css.form__field}>
            <textarea
              className={css.form__textarea}
              type="text"
              rows="6"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.textarea}
            />
            {touched.textarea && errors.textarea && (
              <p className={css.form__error}>{errors.textarea}</p>
            )}
          </div>
          <div className={css.wrap}>
            <p className={css.textLabel} id="my-radio-group">
              Label color
            </p>
            <div role="group" aria-labelledby="my-radio-group">
              <label className={css.label}>
                <Field
                  type="radio"
                  name="priority"
                  className={css.real__radio}
                  value="low"
                />
                <span className={css.сustom__radio}></span>
              </label>

              <label className={css.label}>
                <Field
                  type="radio"
                  name="priority"
                  className={css.real__radio}
                  value="medium"
                />
                <span className={`${css.сustom__radio} ${css.color2}`}></span>
              </label>
              <label className={css.label}>
                <Field
                  type="radio"
                  name="priority"
                  className={css.real__radio}
                  value="high"
                />
                <span className={`${css.сustom__radio} ${css.color3}`}></span>
              </label>
              <label className={css.label}>
                <Field
                  type="radio"
                  name="priority"
                  className={css.real__radio}
                  value="none"
                />
                <span className={`${css.сustom__radio} ${css.color4}`}></span>
              </label>
            </div>
            <p className={css.textLabel} id="my-radio-group">
              Deadline
            </p>
            <Calendar />
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
