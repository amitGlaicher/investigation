import style from './style.module.css';
import React, { useState } from 'react';
import Choose from '../Choose';
import Input from '../Input';

function Camuty({ arrayToMap, numClickNext, data = () => {} }) {
  const initialState = Array(20).fill('אלגברה');
  const [stateArray, setStateArray] = useState(initialState);

  const setStates = Array.from({ length: 20 }, (_, index) => {
    return (newState) => {
      setStateArray((prevState) => {
        const newStateArray = [...prevState];
        newStateArray[index] = newState;
        return newStateArray;
      });
    };
  });

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
  const causingDifficulty = [
    'ריבוי מלל',
    'ריבוי נעלמים',
    'תשובות קרובות',
    'הערכת סדר גודל',
    'תרשים מורכב',
    'דילוג מהבית',
    'נושא נדיר',
    'פירוט שיטתי ',
    'אחר',
  ];
  const typeError = ['חישוב ', 'אסטרטגיה', 'שלבי חשיבה'];
  const solution = [
    'הצבת תשובות',
    'הצבה מספרים',
    'אלגברה',
    'הערכת סדר גודל',
    'גיאומטריה',
    'קיפולי נייר',
    'יחס',
    'רגע קסם',
  ];
  const lesson = ['התנהלות', 'חשיבה', 'ידע'];

  return (
    <tbody className={style.camuty}>
      {arrayToMap.map((number, index) => (
        <tr key={index} className={style.row}>
          <td>
            <input
              className={style.inputnone}
              type="number"
              value={number}
              onChange={() => {}}
              {...data(number)}
            />
          </td>
          <td className={style.row}>
            <Choose
              className={style.firstChoice}
              placeholder={' נושא'}
              array={topics}
              choice={setStates[index]}
              data={data}
            />
          </td>
          <td className={style.row}>
            {stateArray[index] === 'אלגברה' && (
              <Choose
                placeholder={' תת נושא'}
                array={subTopicsAlgebra}
                className={style.firstChoice}
                data={data}
              />
            )}
            {stateArray[index] === `גיאומטריה` && (
              <Choose
                placeholder={' תת נושא'}
                array={subTopicsGeometrics}
                className={style.firstChoice}
                data={data}
              />
            )}
            {stateArray[index] === 'בעיות כמותיות' && (
              <Choose
                placeholder={' תת נושא'}
                className={style.firstChoice}
                array={subTopicsAmountProblems}
                data={data}
              />
            )}
            {stateArray[index] === 'הסקה מתרשים' && (
              <Choose
                placeholder={' תת נושא'}
                array={subTopicsDiagram}
                className={style.firstChoice}
                data={data}
              />
            )}
          </td>
          <td>
            {' '}
            <Choose
              placeholder={'גורם קושי'}
              array={causingDifficulty}
              className={style.firstChoice}
              data={data}
            />
          </td>
          {numClickNext !== 0 && numClickNext % 2 === 1 && (
            <>
              <td>
                {' '}
                <Choose
                  placeholder={' סוג הטעות'}
                  array={typeError}
                  className={style.firstChoice}
                  data={data}
                />
              </td>
              <td>
                <Input
                  type="Text"
                  placeholder={'הסיבה לטעות'}
                  className={style.reason}
                  data={data}
                />
              </td>
            </>
          )}
          <td>
            {' '}
            <Choose
              array={solution}
              choice=""
              data={data}
              placeholder={' דרך פתרון'}
            />
          </td>
          <td>
            {' '}
            <Choose
              array={lesson}
              choice=""
              data={data}
              placeholder={' סוג לקח'}
            />
          </td>
          <td className={style.lesson}>
            <Input
              type="Text"
              placeholder={'לקח יישומי'}
              className={style.lesson}
              data={data}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Camuty;
