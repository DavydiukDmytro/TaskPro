import { NavLink, Outlet } from 'react-router-dom';
import {RegistrationForm} from '../RegisterForm'
export const AuthSection = () => {
  return (
    <div>
      <div>
        <NavLink >Registration</NavLink>
        <NavLink><RegistrationForm/></NavLink>
      </div>
      <Outlet />
    </div>
  );
};
