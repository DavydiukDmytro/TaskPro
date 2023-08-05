import { Route, Routes, Navigate } from 'react-router-dom';

import { Welcome } from '../../page/Welcome';
import { Auth } from '../../page/Auth';
import { Home } from '../../page/Home';
import { ScreensPage } from '../../page/ScreensPage';
import { RegistrationForm } from '../RegisterForm';
import { LoginForm } from '../LoginForm';

import { ThemeProvider } from '../ThemeSwitcher/ThemeContext';

export const App = () => {
  const isAuthenticated = true;

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
          element={isAuthenticated ? <Home /> : <Navigate to="/auth/login" />}
        >
          <Route path=":boardName" element={<ScreensPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};
