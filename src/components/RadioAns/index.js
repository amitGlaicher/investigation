import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Choose from '../Choose';
import Input from '../Input';
import style from './style.module.css';
const topicChapter = ['כמותי', 'מילולי', 'אנגלית'];

function RadioAns() {
  const [answer, setAnswer] = useState();
  const [chapterName, setChapterName] = useState('כמותי');
  const [arrayNum, setArrayNum] = useState(['1', '2']);

  const navigate = useNavigate();
  const question1 = useRef();
  const question2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chapterName === 'כמותי') {
      navigate('./Camuty');
    } else if (chapterName === 'מילולי') {
      navigate('./Miluly');
    } else {
      navigate('./English');
    }
  };

  const onRadioInput = (e, index) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    if (chapterName === 'כמותי') {
      setArrayNum(new Array(20).fill().map((_, idx) => idx + 1));
    } else if (chapterName === 'מילולי') {
      setArrayNum(new Array(23).fill().map((_, idx) => idx + 1));
    } else {
      setArrayNum(new Array(22).fill().map((_, idx) => idx + 1));
    }
  }, [chapterName]);

  return (
    <div className={style.radioAns_container}>
      <div className={style.radioAns_table}>
        <h2>הזנת תשובות</h2>
        <form onSubmit={handleSubmit}>
          <Choose
            array={topicChapter}
            disabled={undefined}
            choice={setChapterName}
          />
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
                        name={number}
                        onInput={onRadioInput}
                      />
                    </label>
                  </td>
                  <td>
                    <label className={style.cell} htmlFor="uncorrect">
                      <Input
                        type="radio"
                        name={number}
                        value="uncorrect"
                        onInput={onRadioInput}
                      />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button type="submit" text={'הבא'} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default RadioAns;
