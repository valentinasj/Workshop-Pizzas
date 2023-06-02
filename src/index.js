import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './routes/AppRouter';
import AppRouter from './routes/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
);

