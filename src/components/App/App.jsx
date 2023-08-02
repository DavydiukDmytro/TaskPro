import { Auth } from 'page/Auth';
import { Home } from 'page/Home';
import { Welcome } from 'page/Welcome';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
