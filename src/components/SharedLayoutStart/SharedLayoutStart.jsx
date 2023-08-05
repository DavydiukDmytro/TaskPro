import { StartContainer } from 'components/StartContainer/StartContainer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayoutStart = () => {
  return (
    <StartContainer>
      <Suspense fallback={<p>DDDD</p>}>
        <Outlet />
      </Suspense>
    </StartContainer>
  );
};

export default SharedLayoutStart;
