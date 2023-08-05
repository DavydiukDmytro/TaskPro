import { useDispatch } from 'react-redux';
import { logOut } from 'store/user/operationAuth';

export const ButtonLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return <button onClick={handleLogout}>Log out</button>;
};
