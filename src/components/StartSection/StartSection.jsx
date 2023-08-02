import { Link } from 'react-router-dom';
import css from './StartSection.module.css';

export const StartSection = () => {
  return (
    <section className={css.section}>
      <div className={css.img__wrapp}>
        <img src="" alt="Task pro user" className={css.img} />
      </div>
      <div className={css.title__wrapp}>
        <svg className={css.icon}>
          <use></use>
        </svg>
        <h1 className={css.title}>Task Pro</h1>
      </div>

      <p className={css.text}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>

      <Link className={css.link}>Registration</Link>
      <Link className={css.link}>Log In</Link>
    </section>
  );
};
