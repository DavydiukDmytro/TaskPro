import css from './Button.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';

export const Button = ({
  isContrast = true,
  isIcon = true,
  type = 'submit',
  text,
  action,
}) => {
  const padding = type === 'submit' ? '49px' : '10px';

  return (
    <button
      type={type}
      className={isContrast ? css.buttonContrast : css.buttonPlain}
      onClick={action}
      style={{ padding }}
    >
      {isIcon && (
        <svg width="28px" height="28px" className={css.icon}>
          <use href={svgSprite + '#icon-plus'} />
        </svg>
      )}

      {text}
    </button>
  );
};
