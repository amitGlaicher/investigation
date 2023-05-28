import React, { useState } from 'react';
import style from './style.module.css';

function Input({
  type,
  placeholder,
  className,
  setState = false,
  data = () => {},
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState('');

  const onInput = (e) => {
    setSelectedValue(e.target.value);
    if (setState !== false) {
      setState(e.target.value);
    }
  };

  return (
    <>
      <input
        // name={selectedValue}
        {...data(selectedValue)}
        type={type}
        placeholder={placeholder}
        className={className}
        onInput={onInput}
        {...props}
        // ref={inputref}
      />
    </>
  );
}
export default Input;
