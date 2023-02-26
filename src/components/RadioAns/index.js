import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Answers from '../Answers';
import Button from '../Button';
import style from './style.module.css';

function RadioAns() {
  const [answer, setAnswer] = useState();
  const [chapterName, setChapterName] = useState();
  const [arrayNum, setArrayNum] = useState([]);
  const [numClickNext, setNumClickNext] = useState(0);
  const [chapterNameEngilsh, setChapterNameEngilsh] = useState();
  const chaptersChoice = JSON.parse(localStorage.getItem('chapters'));
  const navigate = useNavigate();
  const submitRef = useRef();

  const topicChapter = chaptersChoice.name;

  useEffect(() => {
    setChapterName(topicChapter[numClickNext]);
  }, [numClickNext]);

  const next = () => {
    console.log(submitRef.current);
    submitRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[2]);
    if (topicChapter.length === 1) {
      if (chapterName === 'כמותי') {
        navigate('./Camuty');
      } else if (chapterName === 'מילולי') {
        navigate('./Miluly');
      } else {
        navigate('./English');
      }
    } else if (numClickNext === 2) {
      navigate('./Camuty');
    } else {
      setNumClickNext((prev) => ++prev);
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

    if (chapterName === 'כמותי') {
      setChapterNameEngilsh('camuty');
    } else if (chapterName === 'מילולי') {
      setChapterNameEngilsh('miluly');
    } else setChapterNameEngilsh('english');
  }, [chapterName]);

  return (
    <div className={style.radioAns_container}>
      <div className={style.radioAns_table}>
        <h2>הזנת תשובות</h2>
        <h4>{chapterName}</h4>
        <form className={style.form_container} onSubmit={handleSubmit}>
          <h6>פרק 1: </h6>
          <Answers arrayNum={arrayNum} onRadioInput={onRadioInput} />
          {chaptersChoice[chapterNameEngilsh] == '2' && (
            <>
              <h6>פרק 2: </h6>
              <Answers arrayNum={arrayNum} onRadioInput={onRadioInput} />
            </>
          )}
          {chaptersChoice[chapterNameEngilsh] == '3' && (
            <>
              <h6>פרק 2: </h6>
              <Answers arrayNum={arrayNum} onRadioInput={onRadioInput} />
              <h6>פרק 3: </h6>
              <Answers arrayNum={arrayNum} onRadioInput={onRadioInput} />
            </>
          )}
          <Button
            className={style.submit_button}
            onClick={() => {}}
            type="submit"
            setref={submitRef}
          />
        </form>
        <Button type="submit" text={'הבא'} onClick={next} />
      </div>
    </div>
  );
}

export default RadioAns;
