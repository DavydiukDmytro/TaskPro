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
      <div className={css.buttonIcon}>
        <svg width={32} height={32} stroke="currentColor">
          <use href={svgSprite + '#login-icon'} />
        </svg>
      </div>
      <span> Log out</span>
    </button>
  );
};
