// import { Auth } from 'page/Auth';
// import { Home } from 'page/Home';
// import { Welcome } from 'page/Welcome';

// import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../ThemeSwitcher/ThemeContext';
// import { EditProfileForm } from 'components/EditProfileForm/EditProfileForm';
import { UserInfo } from '../UserInfo';

export const App = () => {
  return (
    <ThemeProvider>
      <UserInfo />
      {/* <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
    </ThemeProvider>
  );
};
