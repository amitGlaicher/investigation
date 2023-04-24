import React, { useState } from 'react';
import style from './style.module.css';
import { Route, Routes } from 'react-router-dom';
import InvestigationPage from '../../pages/InvestigationPage';
import LoginPage from '../../pages/LoginPage';

function LayOut() {
  const [token, setToken] = useState(true);
  return (
    <Routes>
      <Route
        path="/*"
        element={
          token ? <InvestigationPage setToken={setToken} /> : <LoginPage />
        }
      />
    </Routes>
  );
}

export default LayOut;
