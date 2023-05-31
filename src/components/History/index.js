import React, { useContext } from "react";
import style from "./style.module.css";
import { userContext } from "../LayOut";
function History() {
  const { user } = useContext(userContext);
  let correctAnswerHistory = 0; 
  let wholeAnswerHistory = 0; 

  user.test.forEach((element) => {
    correctAnswerHistory += Number(element.correctAnswer);
    wholeAnswerHistory += Number(element.sumAnswers);
  });
let present = correctAnswerHistory/wholeAnswerHistory*100;
present = present.toFixed(2);
  return (
    <div className={style.historyContainer}>
      <h2 className={style.title}>הסטוריה</h2>
      <div className={style.history}>
        <div className={style.miniTitle}>סך תשובות נכונות: {correctAnswerHistory} </div>
        <div className={style.miniTitle}>סך כלל התשובות: {wholeAnswerHistory} </div>
        <div className={style.miniTitle}>אחוזי הצלחה: {present}% </div>
      </div>
    </div>
  );
}

export default History;
