import css from './NewBoard.module.css';
import sprite from '../../assets/svg/symbol-defs.svg';
import { useFormik } from 'formik';
import { backgroundOptions, iconArr } from './option';
import { useDispatch } from 'react-redux';
import { addBoard } from 'store/boards/operationsBoards';

export const NewBoard = ({ handleClose }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      icon: 'project',
      background: 'none',
    },
    onSubmit: values => {
      dispatch(addBoard(values));
      handleClose();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={css.formTitle}>
        <p className={css.h1}>New board</p>
        <label>
          <input
            className={css.inputTitle}
            type="text"
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </label>

        <p className={css.iconsTitle}>Icons</p>
        <div className={css.radioBlock_1}>
          {Object.values(iconArr).map(icon => (
            <label key={icon}>
              <input
                className={css.iconsType}
                name="icon"
                type="radio"
                id={icon}
                value={icon}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.icon === icon}
              />
              <svg className={css.svgStyle}>
                <use href={sprite + `#icon-${icon}`}></use>
              </svg>
            </label>
          ))}
        </div>

        <p className={css.iconsTitle}>Background</p>
        <div className={css.radioBlock_2}>
          {backgroundOptions.map(option => (
            <label key={option.value}>
              <input
                className={css.iconsType}
                name="background"
                type="radio"
                value={option.value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.background === option.value}
              />
              <img
                className={css.imgStyle}
                src={option.image}
                alt={option.label}
              />
            </label>
          ))}
        </div>

        <button className={css.formButton} type="submit">
          <svg width="28px" height="28px" className={css.buttonIcon}>
            <use href={sprite + '#icon-plus'} />
          </svg>
          Create
        </button>
      </form>
    </>
  );
};
