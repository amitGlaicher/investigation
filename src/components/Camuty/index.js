import React, { useState } from 'react';
import Choose from '../Choose';
import Input from '../Input';
import style from './style.module.css';

function Camuty() {
  const [answer, setAnswer] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  const [topicChoiceRow1, setTopicChoiceRow1] = useState('אלגברה');
  const [topicChoiceRow2, setTopicChoiceRow2] = useState('אלגברה');
  const topicChoice = [topicChoiceRow1, topicChoiceRow2];
  const setTopicChoice = [setTopicChoiceRow1, setTopicChoiceRow2];

  const onChooseAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const onRadioInput = (e) => {
    onChooseAnswer(e);
    e.target.value === 'true' ? setIsCorrect(true) : setIsCorrect(false);
  };
  const number = [
    1, 2,
    //  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const topics = ['אלגברה', 'גיאומטריה', 'בעיות כמותיות', 'הסקה מתרשים'];
  const subTopicsAlgebra = [
    'משוואות',
    'ביטויים ',
    'טווחים ',
    'התנהגות אלגברית ',
    'ערך מוחלט ',
    'פעולות מומצאות ',
    'שלמים ',
    ' חלוקה',
    'אותיות וספרות ',
  ];
  const subTopicsGeometrics = [
    'משולשים',
    'מצולעים ',
    'מעגלים ',
    ' דמיון ',
    ' פיתגורס ',
    ' שטחים ',
    'תלת מימד ',
  ];
  const subTopicsAmountProblems = [
    'בעיות כלליות',
    'יחס ',
    'אחוזים ',
    ' ממוצע ',
    ' תנועה ',
    ' הספק ',
    ' צירופים ',
    ' הסתברות ',
  ];
  const subTopicsDiagram = [' תחילת פרק', 'אמצע פרק ', 'סוף פרק '];
  const causingDifficulty = ['גורם קושי'];
  const typeError = ['סוג הטעות'];
  const solution = ['דרך פתרון'];
  const lesson = ['סוג לקח'];
  return (
    <div className={style.camuty_container}>
      <h2 className={style.title}>פרק כמותי</h2>
      <form>
        <table className={style.camuty_table}>
          <thead className={style.thead}>
            <tr>
              <th>מספר שאלה</th>
              <th>נושא</th>
              <th>תת נושא</th>
              <th>גורם קושי</th>
              <th>סוג הטעות</th>
              <th>הסיבה לטעות</th>
              <th>דרך פתרון</th>
              <th>סוג לקח</th>
              <th>לקח יישומי</th>
            </tr>
          </thead>
          <tbody>
            {number.map((number, index) => (
              <tr key={number} className={style.row}>
                <td>{number}</td>
                <td className={style.row}>
                  <Choose
                    className={style.firstChoice}
                    array={topics}
                    disabled={isCorrect}
                    choice={setTopicChoice[index]}
                  />
                </td>
                {topicChoice[index] === 'אלגברה' && (
                  <Choose
                    array={subTopicsAlgebra}
                    className={style.firstChoice}
                    disabled={isCorrect}
                    choice=""
                  />
                )}
                <td>
                  {topicChoice[index] === `גיאומטריה` && (
                    <Choose
                      array={subTopicsGeometrics}
                      className={style.firstChoice}
                      disabled={isCorrect}
                      choice=""
                    />
                  )}
                  {topicChoice[index] === 'בעיות כמותיות' && (
                    <Choose
                      className={style.firstChoice}
                      array={subTopicsAmountProblems}
                      disabled={isCorrect}
                      choice=""
                    />
                  )}
                  {topicChoice[index] === 'הסקה מתרשים' && (
                    <Choose
                      array={subTopicsDiagram}
                      disabled={isCorrect}
                      className={style.firstChoice}
                      choice=""
                    />
                  )}
                </td>
                <td>
                  {' '}
                  <Choose
                    array={causingDifficulty}
                    disabled={isCorrect}
                    className={style.firstChoice}
                    choice=""
                  />
                </td>
                <td>
                  {' '}
                  <Choose
                    array={typeError}
                    disabled={isCorrect}
                    className={style.firstChoice}
                    choice=""
                  />
                </td>
                <td>
                  <Input
                    type="Text"
                    placeholder={'הסיבה לטעות'}
                    className={style.input}
                  />
                </td>
                <td>
                  {' '}
                  <Choose array={solution} disabled={isCorrect} choice="" />
                </td>
                <td>
                  {' '}
                  <Choose array={lesson} disabled={isCorrect} choice="" />
                </td>
                <td>
                  <Input
                    type="Text"
                    placeholder={'לקח יישומי'}
                    className={style.input}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Camuty;
