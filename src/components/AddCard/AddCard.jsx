import { Calendar } from 'components/Calendar/Calendar';
import { format } from 'date-fns';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addTask, updateTaskById } from 'store/boards/operationsBoards';
// import { useDispatch } from 'react-redux';
// import {AddCard  } from '...';
// import {CanedarValue } from '...';
import { object, string } from 'yup';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './AddCard.module.css';

const schema = object({
  title: string().trim().required('Required'),
  description: string().trim().required('Required'),
  priority: string().trim().required('Required'),
  deadline: string().trim().required('Required'),
});

export const AddCard = ({ edit = false, handleClose, columnId }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    if (edit) {
      dispatch(updateTaskById({ _id: edit._id, ...values }));
    } else {
      dispatch(addTask({ columnId, ...values }));
    }
    handleClose();
    resetForm();
  };

  const initialValuesForm = {
    title: edit ? edit.title : '',
    description: edit ? edit.description : '',
    priority: edit ? edit.priority : 'none',
    deadline: edit ? edit.deadline : format(new Date(), 'dd/MM/yyyy'),
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
            <p className={css.text}>{edit ? 'Edit Card' : 'Add Card'}</p>
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
              value={values.description}
            />
            {touched.description && errors.description && (
              <p className={css.form__error}>{errors.description}</p>
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
            <Calendar editDate={edit.deadline} />
          </div>
          <div className={css.wrapButton}>
            <button type="submit" className={css.button}>
              <svg width="28px" height="28px" className={css.icon}>
                <use href={svgSprite + '#icon-plus'} />
              </svg>
              {edit ? 'Edit' : 'Add'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
