import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
