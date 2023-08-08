import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogin } from 'store/user/selectorsAuth';

export const PrivateRoute = ({ children }) => {
  const isLogIn = useSelector(getIsLogin);

  return isLogIn ? children : <Navigate to="/auth/login" />;
};
