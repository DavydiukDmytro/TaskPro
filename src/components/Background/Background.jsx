import css from './Background.module.css'

export const Background = ({ children }) => {
  return <main className={css.main}>{children}</main>;
};
