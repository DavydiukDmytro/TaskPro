import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
// import {AddCard  } from '...';
// import {CanedarValue } from '...';
import { object, string } from 'yup';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './AddCard.module.css';

const initialValuesForm = {
  title: '',
  textarea: '',
  color: '',
  date: '',
};
console.log(css);
const schema = object({
  title: string().trim().required('Required'),
  textarea: string().trim().required('Required'),
  color: string().trim().required('Required'),
  date: string().trim().required('Required'),
});

export const AddCard = () => {
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    // await dispatch(AddCard(values));
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
                name="textarea"
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
                    name="color"
                    className={css.real__radio}
                    value="#8fa1d0"
                  />
                  <span className={css.сustom__radio}></span>
                </label>

                <label className={css.label}>
                  <Field
                    type="radio"
                    name="color"
                    className={css.real__radio}
                    value="#e09cb5"
                  />
                  <span className={`${css.сustom__radio} ${css.color2}`}></span>
                </label>
                <label className={css.label}>
                  <Field
                    type="radio"
                    name="color"
                    className={css.real__radio}
                    value="#bedbb0"
                  />
                  <span className={`${css.сustom__radio} ${css.color3}`}></span>
                </label>
                <label className={css.label}>
                  <Field
                    type="radio"
                    name="color"
                    className={css.real__radio}
                    value="#ffffff"
                  />
                  <span className={`${css.сustom__radio} ${css.color4}`}></span>
                </label>
              </div>
            </div>
            <div className={css.wrap}>
              <label className={css.textLabel}>Deadline</label>
              <div className={css.wrapPosition}>
                <Field
                  placeholder="Calendar Date"
                  className={css.inputCalendar}
                  type="text"
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.date}
                />
                {touched.date && errors.date && (
                  <p className={css.form__error}>{errors.date}</p>
                )}
                <svg width={16} height={16} className={css.svgDown}>
                  <use href={svgSprite + '#icon-Vector'} />
                </svg>
              </div>
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
