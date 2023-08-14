import css from './NewBoard.module.css';
import sprite from '../../assets/svg/symbol-defs.svg';
import { useFormik } from 'formik';
import { backgroundOptions, iconArr } from './option';
import { useDispatch } from 'react-redux';
import { addBoard, updateBoard } from 'store/boards/operationsBoards';
import {
  boardEditSchema,
  boardSchema,
} from '../../utils/validation/boardSchema';

export const NewBoard = ({
  handleClose,
  edit = false,
  background = 'none',
  icon = 'project',
  title = '',
  id,
}) => {
  const dispatch = useDispatch();
  let validate;
  edit ? (validate = boardEditSchema) : (validate = boardSchema);
  const formik = useFormik({
    initialValues: {
      title,
      icon,
      background,
    },
    validate,
    onSubmit: values => {
      edit
        ? dispatch(updateBoard({ _id: id, ...values }))
        : dispatch(addBoard(values));
      handleClose();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={css.formTitle}>
        <p className={css.modalTitle}>{edit ? 'Edit board' : 'New board'}</p>
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

        <div className={css.iconWrapper}>
          <p className={css.iconsTitle}>Icons</p>
          {/* <div className={css.radioBlock_1}> */}
          {Object.values(iconArr).map(icon => (
            <label className={css.radioBlock_1} key={icon}>
              <input
                className={css.inputStyled}
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
          {/* </div> */}
        </div>

        <div className={css.bgLabel}>
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
        </div>

        <button className={css.formButton} type="submit">
          <svg width="28px" height="28px" className={css.buttonIcon}>
            <use href={sprite + '#icon-plus'} />
          </svg>
          {edit ? 'Edit' : 'Create'}
        </button>
      </form>
    </>
  );
};
