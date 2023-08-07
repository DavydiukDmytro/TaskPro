import { Link } from 'react-router-dom';
import css from './BlankPage.module.css';

const BlankPage = () => {
  return (
    <section className={css.section}>
      <>Filter</>
      <div className={css.text__wrapp}>
        <p>
          Before starting your project, it is essential{' '}
          {
            <Link className={css.link} to="/auth/register">
              to create a board
            </Link>
          }{' '}
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
    </section>
  );
};

export default BlankPage;
