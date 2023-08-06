import { useDispatch } from 'react-redux';
import { logOut } from 'store/user/operationAuth';
import css from './ButtonLogout.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';

export const ButtonLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <button onClick={handleLogout} className={css.button}>
      <svg width={32} height={32} className={css.icon} stroke="currentColor">
        <use href={svgSprite + '#login-icon'} />
      </svg>
      <span className={css.buttonText}> Log out</span>
    </button>
  );
};
