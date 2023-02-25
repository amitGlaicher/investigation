import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import style from './style.module.css';

function NavBar({ setToken }) {
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
          navigate('./');
        }}
      />
      <Button
        text={'רשימת לקחים'}
        onClick={() => {
          navigate('./insights');
        }}
      />
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
