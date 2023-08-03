import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { useThemeContext } from '../../components/ThemeSwitcher/ThemeContext';
import css from './Home.module.css';

const Home = () => {
  // const { currentTheme } = useThemeContext();

  // const appStyles = {
  //   backgroundColor: currentTheme.palette.background.primary,
  // };
  return (
    <div className={css.homePage}>
      <h1>Home</h1>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};

export default Home;
