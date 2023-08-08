import { Loader } from 'components/Loader';
import { Message } from 'components/Message';
import { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getError, getIsLoading } from 'store/user/selectorsAuth';
import css from './AuthSection.module.css';

export const AuthSection = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (error) {
      setIsMessageOpen(true);
    }
  }, [error]);

  const closeMessage = () => {
    setIsMessageOpen(false);
  };

  return (
    <div className={css.container}>
      <div className={css.link__container}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? css.active : css.link;
          }}
          to="register"
        >
          Registration
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? css.active : css.link;
          }}
          to="login"
        >
          Log In
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {isMessageOpen && !isLoading && (
        <Message closeMessage={closeMessage} textMessage={error} />
      )}
    </div>
  );
};
