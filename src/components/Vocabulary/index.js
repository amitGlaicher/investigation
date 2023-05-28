import React, { useContext } from "react";
import style from "./style.module.css";
import { userContext } from "../LayOut";

function Vocabulary() {
  const { user } = useContext(userContext);
  return (
    <div className={style.vocabularyContainer}>
      <h2 className={style.title}>אוצר מילים</h2>
      {user.vocabulary.map((word) => (
        <div className={style.vocabulary} key={word}>{word}</div>
      ))}
    </div>
  );
}

export default Vocabulary;
