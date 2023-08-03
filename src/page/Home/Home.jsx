import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { useThemeContext } from '../../components/ThemeSwitcher/ThemeContext';

const Home = () => {
  const { currentTheme } = useThemeContext();

  const appStyles = {
    backgroundColor: currentTheme.palette.background.primary,
  };
  return (
    <div style={appStyles}>
      <h1>Home</h1>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};

export default Home;
