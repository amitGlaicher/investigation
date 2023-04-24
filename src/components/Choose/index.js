import React, { useState } from 'react';
import style from './style.module.css';

function Choose({
  array,
  disabled = false,
  choice = false,
  placeholder = null,
  data = () => {},
}) {
  const [selectedValue, setSelectedValue] = useState(array[0]);

  const onInput = (e) => {
    setSelectedValue(e.target.value);
    if (choice !== false) {
      choice(e.target.value);
    }
  };
  return (
    <div className={style.choose_container}>
      <label>
        <select
          className={style.choose}
          // name={selectedValue}
          {...data(selectedValue)}
          disabled={disabled}
          onInput={onInput}
        >
          {placeholder != null && (
            <option value="" disabled selected>
              {placeholder}
            </option>
          )}
          {array.map((topic) => (
            <option className={style.topic} key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Choose;
