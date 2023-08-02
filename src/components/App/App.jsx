import { Auth } from 'page/Auth';
import { Home } from 'page/Home';
import { Welcom } from 'page/Welcom';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/welcom" element={<Welcom />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
