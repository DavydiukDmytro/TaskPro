import { Button } from 'components/Button/Button';
import css from './MainDashboard.module.css';
import { CardSection } from 'components/CardSection/CardSeection';

export const MainDashboard = () => {
  return (
    <div className={css.board}>
      <ul className={css.columnList}>
        <li>
          <CardSection />
        </li>
        <li>
          <CardSection />
        </li>
        <li>
          <CardSection />
        </li>
        <li>
          <CardSection />
        </li>
      </ul>

      <div className={css.columnButton}>
        <Button
          isContrast={false}
          type={'button'}
          text={'Add another column'}
        />
      </div>
    </div>
  );
};
