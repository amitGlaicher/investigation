import React from 'react';
import style from './style.module.css';

function Choose({ array, disabled = false, choice }) {
  const onInput = (e) => {
    if (choice !== false) {
      choice(e.target.value);
    }
  };
  return (
    <div className={style.choose}>
      <label>
        <select disabled={disabled} onInput={onInput}>
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
