import { Background } from 'components/Background/Background';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { useDispatch, useSelector } from 'react-redux';



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
