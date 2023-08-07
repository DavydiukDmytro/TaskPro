import { BoardsList } from 'components/BoardsList';
import { ButtonLogout } from 'components/ButtonLogout';
import css from './Sidebar.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { BoardTitle } from 'components/BoardTitle/BoardTitle';

export const Sidebar = () => {
  return (
    <section className={css.sidebar}>
      <div className={css.logoWrapp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className={css.logoSvg}
        >
          <path
            d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z"
            fill="var(--logo-bg) "
          />
          <path
            d="M13.3314 23.0269C13.5759 21.7553 13.7841 20.4168 14.0783 19.0782C14.2232 18.3777 14.0466 18.0788 13.2635 18.1324C12.4804 18.1859 11.6068 18.1591 10.7739 18.1324C9.94105 18.1056 9.79167 17.6862 10.2715 17.0883C12.6343 14.1703 15.0243 11.2881 17.4053 8.41472C17.6724 8.08902 17.9802 7.85701 18.4193 8.1024C18.8583 8.3478 18.7678 8.6512 18.6954 9.01706C18.4328 10.3556 18.2156 11.6941 17.9259 13.0058C17.7765 13.684 17.9711 13.9249 18.6773 13.8982C19.386 13.8625 20.096 13.8625 20.8047 13.8982C21.2076 13.8982 21.7372 13.6885 21.9454 14.2373C22.1536 14.7861 21.7146 15.0181 21.4928 15.3438C20.5875 16.4592 19.6701 17.5731 18.7406 18.6856C17.3797 20.3097 16.0292 21.9278 14.6894 23.54C14.4268 23.8567 14.1326 24.1111 13.6845 23.9504C13.2364 23.7898 13.3314 23.4106 13.3314 23.0269Z"
            fill=" var(--logo-color) "
          />
        </svg>
        <h1 className={css.logo}>Task Pro</h1>
      </div>
      <BoardTitle />
      <BoardsList />

      <ButtonLogout />
    </section>
  );
};
