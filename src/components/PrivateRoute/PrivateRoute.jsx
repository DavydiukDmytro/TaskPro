// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getIsLoggin } from 'store/user/selectorsAuth';

export const PrivateRoute = ({ children }) => {
  // const isLoggedin = useSelector(getIsLoggin);

  return true ? children : <Navigate to="/auth/login" />;
};
