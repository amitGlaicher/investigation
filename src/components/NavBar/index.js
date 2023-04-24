import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import style from './style.module.css';
import apiCalls from '../../Helpers/apiCalls.js';
import Answers from '../Answers';
import { ansContext } from '../../App';

function NavBar({ setToken }) {
  const answersContext = useContext(ansContext)
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
          answersContext.forEach(arr => {
            arr[1]([])
          });
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
