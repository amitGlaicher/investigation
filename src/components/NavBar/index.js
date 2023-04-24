import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import style from './style.module.css';
import apiCalls from '../../Helpers/apiCalls.js';

function NavBar({ setToken }) {
  const insights = async () => {
    const res = await apiCalls('get', 'user/insights');
    // console.log(res);
    navigate('./insights');
  };
  const navigate = useNavigate();
  return (
    <div className={style.navbar_container}>
      <Button
        text={'ההתקדמות שלי'}
        onClick={() => {
          navigate('./Myadvance');
        }}
      />
      <Button
        text={'תחקור חדש'}
        onClick={() => {
          localStorage.setItem('chapters', '');
          navigate('./');
        }}
      />
      <Button text={'רשימת לקחים'} onClick={insights} />
      <Button
        text={'אוצר מילים'}
        onClick={() => {
          navigate('./vocabulary');
        }}
      />
      <Button
        text={'היסטוריה'}
        onClick={() => {
          navigate('./history');
        }}
      />
      <Button
        text={'התנתק'}
        onClick={() => {
          setToken(false);
        }}
      />
    </div>
  );
}

export default NavBar;
