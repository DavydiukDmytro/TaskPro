import { Sidebar } from 'components/Sidebar/Sidebar';
// import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
// import { UserInfo } from 'components/UserInfo';
// import { UserInfo } from '../../components/UserInfo';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { CardSection } from 'components/CardSection/CardSeection';


export const Home = () => {
  return (
    <>
      <Header />
      <MainDashboard>
        <CardSection />
      </MainDashboard>
      <main>
        <Suspense fallback={<p>DDDD</p>}>
        
          <Outlet />
        </Suspense>
    
      </main>
      <Sidebar />
    </>
  );
};
