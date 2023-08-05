import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
