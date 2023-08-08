import { Background } from 'components/Background/Background';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';

const ScreensPage = () => {
  return (
    <>
      <Background>
        <HeaderDashboard />
        <MainDashboard />
      </Background>
    </>
  );
};

export default ScreensPage;
