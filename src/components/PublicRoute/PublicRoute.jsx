import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogin } from 'store/user/selectorsAuth';

export const PublicRoute = ({ children }) => {
  const isLogIn = useSelector(getIsLogin);

  return isLogIn ? <Navigate to="/home" /> : children;
};
