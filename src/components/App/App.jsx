import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { ThemeProvider } from '../ThemeSwitcher/ThemeContext';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';

import { SharedLayoutStart } from '../SharedLayoutStart';

// import { Welcome } from '../../page/Welcome';
// import { Auth } from '../../page/Auth';
// import { Home } from '../../page/Home';
// import { ScreensPage } from '../../page/ScreensPage';

// import { LoginForm } from '../LoginForm';

// const SharedLayoutStart = lazy(() => import('../SharedLayoutStart'));
const StartPage = lazy(() => import('../../page/Start/Start'));
const AuthPage = lazy(() => import('../../page/Auth/Auth'));
const RegistrationForm = lazy(() => import('../RegisterForm/RegistrationForm'));
const LoginForm = lazy(() => import('../LoginForm/LoginForm'));

const Home = lazy(() => import('../../page/Home/Home'));
const ScreensPage = lazy(() => import('../../page/ScreensPage/ScreensPage'));

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<SharedLayoutStart />}>
          <Route index element={<StartPage />} />
          <Route path="/auth" element={<AuthPage />}>
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
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
