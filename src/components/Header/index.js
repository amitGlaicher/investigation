import React from 'react';
import style from './style.module.css';
import { TiThMenuOutline } from 'react-icons/ti';

function Header({ setNavOpen }) {
  return (
    <div className={style.header}>
      תחקור פסיכומטרי
      <TiThMenuOutline
        text={'פתיחה'}
        className={style.icon}
        onClick={() => {
          setNavOpen((prev) => !prev);
        }}
      />
    </div>
  );
}

export default Header;
