import { NavLink, Outlet } from 'react-router-dom';
import css from './AuthSection.module.css';

export const AuthSection = () => {
  return (
    <div className={css.container}>
      <div className={css.link__container}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? css.active : css.link;
          }}
          to="register"
        >
          Registration
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? css.active : css.link;
          }}
          to="login"
        >
          Log In
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
