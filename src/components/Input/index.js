import React from 'react';
import style from './style.module.css';

function Input({ type, placeholder, className, ...props }) {
  //  inputRef, ...props }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...props}
        // ref={inputRef}
      />
    </>
  );
}
export default Input;
