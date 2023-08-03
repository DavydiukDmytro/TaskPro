import { NavLink } from 'react-router-dom';
import { StartContainer } from 'components/StartContainer/StartContainer';

const Auth = () => {
  return (
    <StartContainer>
      <div>
        <NavLink>Registration</NavLink>
        <NavLink>Log In</NavLink>
      </div>
    </StartContainer>
  );
};

export default Auth;
