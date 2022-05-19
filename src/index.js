import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { routes } from './routes';
import { UserMsg } from './cmps/user-msg';

import './styles/styles.scss';
import { AppHeader } from './cmps/app-header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}
        </Routes>
        <UserMsg />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals