import React from 'react';
import style from './style.module.css';
import Login from '../../components/Login';

function LoginPage() {
  return (
    <div className={style.loginPage}>
      <Login />
    </div>
  );
}

export default LoginPage;
