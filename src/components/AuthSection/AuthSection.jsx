import { NavLink, Outlet } from 'react-router-dom';

export const AuthSection = () => {
  return (
    <div>
      <div>
        <NavLink >Registration</NavLink>
        <NavLink>Log In</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
