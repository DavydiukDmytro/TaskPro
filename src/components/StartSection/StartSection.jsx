import { Link } from 'react-router-dom';
import css from './StartSection.module.css';

export const StartSection = () => {
  return (
    <section>
      <img src="" alt="Task pro user" />
      <div className="title-wrapp">
        <svg>
          <use></use>
        </svg>
        <h1 className={css.title}>Task Pro</h1>
      </div>

      <p className={css.text}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>

      <Link>Registration</Link>
      <Link>Log In</Link>
    </section>
  );
};
