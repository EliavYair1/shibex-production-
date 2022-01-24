import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter } from 'react-router-dom';

import AOS from 'aos';
AOS.init();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
