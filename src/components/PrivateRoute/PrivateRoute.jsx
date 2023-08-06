import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggin } from 'store/user/selectorsAuth';

export const PrivateRoute = ({ children }) => {
  const isLogIn = useSelector(getIsLoggin);

  return isLogIn ? children : <Navigate to="/auth/login" />;
};
