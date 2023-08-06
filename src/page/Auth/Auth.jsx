import { AuthSection } from 'components/AuthSection/AuthSection';
import { StartContainer } from 'components/StartContainer/StartContainer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <StartContainer>
      <AuthSection />
      <Suspense fallback={<p>DDDD</p>}>
        <Outlet />
      </Suspense>
    </StartContainer>
  );
};

export default Auth;
