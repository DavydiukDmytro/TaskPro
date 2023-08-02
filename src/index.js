import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './utils/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/TaskPro">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
