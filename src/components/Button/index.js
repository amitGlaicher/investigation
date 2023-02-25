import React from 'react';
import style from './style.module.css';

function Button({ text, onClick }) {
  return (
    <div onClick={onClick}>
      <button>{text}</button>
    </div>
  );
}

export default Button;
