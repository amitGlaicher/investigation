import React from 'react';
import style from './style.module.css';
import Login from '../../components/Login';
import { Route, Routes } from 'react-router-dom';
import Register from '../../components/Register';

function LoginPage() {
  return (
    <div className={style.loginPage}>
      <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default LoginPage;
