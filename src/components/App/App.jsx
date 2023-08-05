import { Auth } from 'page/Auth';
import { Home } from 'page/Home';
import { Welcome } from 'page/Welcome';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../ThemeSwitcher/ThemeContext';

export const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};
