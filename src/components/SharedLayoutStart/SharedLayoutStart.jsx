import { Loader } from 'components/Loader';
import { StartContainer } from 'components/StartContainer/StartContainer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayoutStart = () => {
  return (
    <StartContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StartContainer>
  );
};

export default SharedLayoutStart;
