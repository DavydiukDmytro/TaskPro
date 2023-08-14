import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { ThemeProvider } from '../ThemeSwitcher/ThemeProvider';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NotFoundPage } from '../../page/NotFoundPage';
import { SharedLayoutStart } from '../SharedLayoutStart';
import { Home } from 'page/Home';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getIsRefresh } from 'store/user/selectorsAuth';
import { refreshUser } from 'store/user/operationAuth';

const StartPage = lazy(() => import('../../page/Start/Start'));
const AuthPage = lazy(() => import('../../page/Auth/Auth'));
const RegistrationForm = lazy(() => import('../RegisterForm/RegistrationForm'));
const LoginForm = lazy(() => import('../LoginForm/LoginForm'));
const ScreensPage = lazy(() => import('../../page/ScreensPage/ScreensPage'));
const BlankPage = lazy(() => import('../../page/BlankPage/BlankPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(getIsRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <p></p>
  ) : (
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
          <Route path=":boardId" element={<ScreensPage />} />
          <Route index element={<BlankPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
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
