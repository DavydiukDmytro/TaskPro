import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { ThemeProvider } from '../ThemeSwitcher/ThemeProvider';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayoutStart } from '../SharedLayoutStart';
import { Home } from 'page/Home';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';

const StartPage = lazy(() => import('../../page/Start/Start'));
const AuthPage = lazy(() => import('../../page/Auth/Auth'));
const RegistrationForm = lazy(() => import('../RegisterForm/RegistrationForm'));
const LoginForm = lazy(() => import('../LoginForm/LoginForm'));
const ScreensPage = lazy(() => import('../../page/ScreensPage/ScreensPage'));

export const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<SharedLayoutStart />}>
          <Route index element={<StartPage />} />
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          >
            <Route path="register" element={<RegistrationForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
};