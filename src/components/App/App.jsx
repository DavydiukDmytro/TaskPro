import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { ThemeProvider } from '../ThemeSwitcher/ThemeContext';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';

// import { Welcome } from '../../page/Welcome';
// import { Auth } from '../../page/Auth';
// import { Home } from '../../page/Home';
// import { ScreensPage } from '../../page/ScreensPage';
// import { RegistrationForm } from '../RegisterForm';
// import { LoginForm } from '../LoginForm';

const Welcome = lazy(() => import('../../page/Welcome/Welcome'));
const Auth = lazy(() => import('../../page/Auth/Auth'));
const Home = lazy(() => import('../../page/Home/Home'));
const ScreensPage = lazy(() => import('../../page/ScreensPage/ScreensPage'));
const RegistrationForm = lazy(() => import('../RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('../LoginForm/LoginForm'));

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route path=":boardName" element={<ScreensPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};
