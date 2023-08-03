import { NavLink } from 'react-router-dom';

export const AuthSection = ({ children }) => {
  return (
    <div>
      <div>
        <NavLink>Registration</NavLink>
        <NavLink>Log In</NavLink>
      </div>
      {children}
    </div>
  );
};
