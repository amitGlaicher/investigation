import React, { useState } from 'react';
import Choose from '../Choose';
import Input from '../Input';
import style from './style.module.css';

function Miluly({ arrayToMap, numClickNext, data = () => {} }) {
  const initialState = Array(22).fill('אנלוגיות');
  const subTitleInitials = Array(22).fill();
  const [stateArray, setStateArray] = useState(initialState);
  const [stateArrayST, setStateArrayST] = useState(subTitleInitials);

  const setStates = Array.from({ length: 22 }, (_, index) => {
    return (newState) => {
      setStateArray((prevState) => {
        const newStateArray = [...prevState];
        newStateArray[index] = newState;
        return newStateArray;
      });
    };
  });

  const setStatesST = Array.from({ length: 22 }, (_, index) => {
    return (newState) => {
      setStateArrayST((prevState) => {
        const newStateArray = [...prevState];
        newStateArray[index] = newState;
        return newStateArray;
      });
    };
  });

  const topics = ['אנלוגיות', 'הבנה והסקה', 'קטע קריאה'];
  const subTopicsAnalogiot = ['1-4', '5-6'];
  const subTopicsHavana = [
    'שאלת פסקה',
    'השלמת משפטים',
    'עריכת ניסוי ',
    ' כללים וסידורים ',
  ];

  const causingDifficultyOfHashMash = [
    'ריבוי השלמות',
    'לולא-אלמלא',
    'סוף פרק',
    'ריבוי מלל',
  ];
  const lesson = ['התנהלות', 'חשיבה', 'ידע'];

  return (
    <tbody>
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
              array={topics}
              choice={setStates[index]}
              data={data}
              placeholder={'נושא'}
            />
          </td>
          <td className={style.row}>
            {stateArray[index] === 'אנלוגיות' && (
              <Choose
                array={subTopicsAnalogiot}
                className={style.firstChoice}
                data={data}
                choice={setStatesST[index]}
                placeholder={'תת נושא'}
              />
            )}
            {stateArray[index] === `הבנה והסקה` && (
              <Choose
                array={subTopicsHavana}
                className={style.firstChoice}
                data={data}
                choice={setStatesST[index]}
                placeholder={'תת נושא'}
              />
            )}
            {stateArray[index] === `קטע קריאה` && (
              <input className={style.inputnone} />
            )}
          </td>
          <td>
            {stateArrayST[index] === `השלמת משפטים` ? (
              <Choose
                array={causingDifficultyOfHashMash}
                className={style.firstChoice}
                data={data}
                placeholder={'גורם קושי'}
              />
            ) : (
              <input className={style.inputnone} />
            )}
          </td>
          {numClickNext !== 0 && numClickNext % 2 === 1 && (
            <>
              <td>
                <Input
                  type="Text"
                  placeholder={'הסיבה לטעות'}
                  className={style.input}
                  data={data}
                />
              </td>
            </>
          )}
          <td>
            {' '}
            <Choose
              array={lesson}
              choice=""
              data={data}
              placeholder={' סוג לקח'}
            />
          </td>
          <td>
            <Input
              type="Text"
              placeholder={'לקח יישומי'}
              className={style.input}
              data={data}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Miluly;
