import React, { useContext } from 'react';
import style from './style.module.css';
import { userContext } from '../LayOut';

function Vocabulary() {
  const {user}= useContext(userContext)
  return <div className={style.vocabulary}>{user.vocabulary.map(word=><div>{word}</div>)}</div>;
}

export default Vocabulary;
