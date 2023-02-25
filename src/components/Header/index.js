import React from 'react';
import Button from '../Button';
import style from './style.module.css';

function Header({ navOpen, setNavOpen }) {
  return (
    <div className={style.header}>
      תחקור פסיכומטרי
      <Button
        text={'פתיחה'}
        onClick={() => {
          setNavOpen((prev) => !prev);
          console.log(navOpen);
        }}
      />
    </div>
  );
}

export default Header;
