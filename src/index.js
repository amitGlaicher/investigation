import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CakeGraph from './components/CakeGraph';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    {/* <CakeGraph /> */}
  </BrowserRouter>
);
