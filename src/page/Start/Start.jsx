import { Link } from 'react-router-dom';
import css from './Start.module.css';
import img from '../../assets/images/welcomeImg/boy.png';
import svgSprite from '../../assets/svg/symbol-defs.svg';

const Start = () => {
  return (
    <section className={css.section}>
      <div className={css.img__wrapp}>
        <img src={img} alt="Task pro user" className={css.img} />
      </div>
      <div className={css.title__wrapp}>
        <svg className={css.icon}>
          <use href={svgSprite + '#icon-task'} />
        </svg>
        <h1 className={css.title}>Task Pro</h1>
      </div>

      <p className={css.text}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>

      <Link className={css.link} to="/auth/register">
        Registration
      </Link>
      <Link className={css.link} to="/auth/login">
        Log In
      </Link>
    </section>
  );
};

export default Start;
