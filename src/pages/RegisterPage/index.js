import React from 'react';
import Register from '../../components/Register';
import style from './style.module.css';

function RegisterPage() {
  return (
    <div className={style.registerPage}>
      <Register />
    </div>
  );
}

export default RegisterPage;
