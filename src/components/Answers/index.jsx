import React from 'react';
import Input from '../Input';
import style from './style.module.css';

export default function Answers({ arrayNum, onRadioInput, uniqueName }) {
  return (
    <table className={style.radioAns_table}>
      <thead className={style.thead}>
        <tr>
          <th>
            מספר <br />
            שאלה
          </th>
          <th>
            תשובה
            <br /> נכונה
          </th>
          <th>
            תשובה <br />
            שגויה
          </th>
        </tr>
      </thead>
      <tbody className={style.radio_body}>
        {arrayNum.map((number) => (
          <tr key={number} className={style.cell}>
            <td className={style.cell}>{number}</td>
            <td className={style.cell}>
              <label className={style.radio} htmlFor="correct">
                <Input
                  type="radio"
                  value="correct"
                  name={`${uniqueName},${number}`}
                  onInput={onRadioInput}
                />
              </label>
            </td>
            <td>
              <label className={style.cell} htmlFor="incorrect">
                <Input
                  type="radio"
                  name={`${uniqueName},${number}`}
                  value="incorrect"
                  onInput={onRadioInput}
                />
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
