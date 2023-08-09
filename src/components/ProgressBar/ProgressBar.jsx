import css from './ProgressBar.module.css';

export const ProgressBar = ({ success, progress }) => {
  const progressBarClassName = success ? css.success : css.error;
  return (
    <div className={css.container}>
      <div
        className={`${css.progressBar} ${progressBarClassName}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
