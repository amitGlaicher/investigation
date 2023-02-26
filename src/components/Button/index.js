import React from 'react';
import style from './style.module.css';

function Button({ text, onClick,disabled=false ,...props}) {
  return (
      <button disabled={disabled} onClick={onClick} ref={props.setref?props.setref:null} props>{text}</button>
  );
}

export default Button;
