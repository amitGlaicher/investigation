import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ansContext } from '../../App';
import Answers from '../Answers';
import Button from '../Button';
import style from './style.module.css';

function RadioAns() {
  const answerContext = useContext(ansContext);
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [firstChapterAns, setFirstChapterAns] = useState(['']);
  const [secondChapterAns, setSecondChapterAns] = useState(['']);
  const [thirdChapterAns, setThirdChapterAns] = useState(['']);
  const [disabled, setDisabled] = useState(true);
  const [chapterName, setChapterName] = useState();
  const [arrayNum, setArrayNum] = useState([]);
  const [numClickNext, setNumClickNext] = useState(0);
  const [chapterNameEngilsh, setChapterNameEngilsh] = useState();

  const chaptersChoice = JSON.parse(localStorage.getItem('chapters'));
  const navigate = useNavigate();
  const submitRef = useRef();

  const column1 = 'column1';
  const column2 = 'column2';
  const column3 = 'column3';
  const topicChapter = chaptersChoice.name;

  useEffect(() => {
    setChapterName(topicChapter[numClickNext]);
  }, [numClickNext, topicChapter]);

  const next = () => {
    setAnswer1(undefined);
    setAnswer2(undefined);
    setAnswer3(undefined);
    const radioBtns = document.getElementsByTagName('input');
    for (let i = 0; i < radioBtns.length; i++) {
      if (radioBtns[i].type === 'radio') {
        radioBtns[i].checked = false;
      }
    }
    submitRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    if (topicChapter.length === 1 || numClickNext === 2) {
      navigate('./tableAnsPage');
    } else {
      setFirstChapterAns((prev) => ['']);
      setSecondChapterAns((prev) => ['']);
      setThirdChapterAns((prev) => ['']);
      setNumClickNext((prev) => ++prev);
    }
  };

  const onRadioInput1 = (e) => {
    setAnswer1(e.target.value);
    const index =
      e.target.name.length === 9
        ? e.target.name.slice(-1)
        : e.target.name.slice(-2);
    const updatedAns = [...firstChapterAns];
    updatedAns[index] = e.target.value;
    setFirstChapterAns(updatedAns);
  };
  const onRadioInput2 = (e) => {
    setAnswer2(e.target.value);
    const index =
      e.target.name.length === 9
        ? e.target.name.slice(-1)
        : e.target.name.slice(-2);
    const updatedAns = [...secondChapterAns];
    updatedAns[index] = e.target.value;
    setSecondChapterAns(updatedAns);
  };
  const onRadioInput3 = (e) => {
    setAnswer3(e.target.value);
    const index =
      e.target.name.length === 9
        ? e.target.name.slice(-1)
        : e.target.name.slice(-2);
    const updatedAns = [...thirdChapterAns];
    updatedAns[index] = e.target.value;
    setThirdChapterAns(updatedAns);
  };

  useEffect(() => {
    if (numClickNext === 0) {
      if (chaptersChoice[chapterNameEngilsh] === '2') {
        answerContext[0][1](firstChapterAns);
        answerContext[1][1](secondChapterAns);
      } else if (chaptersChoice[chapterNameEngilsh] === '3') {
        answerContext[0][1](firstChapterAns);
        answerContext[1][1](secondChapterAns);
        answerContext[2][1](thirdChapterAns);
      } else {
        answerContext[0][1](firstChapterAns);
      }
    }
    if (numClickNext === 1) {
      if (chaptersChoice[chapterNameEngilsh] === '2') {
        answerContext[3][1](firstChapterAns);
        answerContext[4][1](secondChapterAns);
      } else if (chaptersChoice[chapterNameEngilsh] === '3') {
        answerContext[3][1](firstChapterAns);
        answerContext[4][1](secondChapterAns);
        answerContext[5][1](thirdChapterAns);
      }
    }
    if (numClickNext === 2) {
      if (chaptersChoice[chapterNameEngilsh] === '2') {
        answerContext[6][1](firstChapterAns);
        answerContext[7][1](secondChapterAns);
      } else if (chaptersChoice[chapterNameEngilsh] === '3') {
        answerContext[6][1](firstChapterAns);
        answerContext[7][1](secondChapterAns);
        answerContext[8][1](thirdChapterAns);
      }
    }

    if (chaptersChoice[chapterNameEngilsh] === '1') {
      if (chapterNameEngilsh === 'camuty') {
        if (firstChapterAns.length === 3) {
          setDisabled(false);
        }
      } else if (chapterNameEngilsh === 'miluly') {
        if (firstChapterAns.length === 3) {
          setDisabled(false);
        }
      } else if (firstChapterAns.length === 3) {
        setDisabled(false);
      }
    } else if (chaptersChoice[chapterNameEngilsh] === '2') {
      if (chapterNameEngilsh === 'camuty') {
        if (firstChapterAns.length === 3 && secondChapterAns.length === 3) {
          setDisabled(false);
        }
      } else if (chapterNameEngilsh === 'miluly') {
        if (firstChapterAns.length === 3 && secondChapterAns.length === 3) {
          setDisabled(false);
        }
      } else if (
        firstChapterAns.length === 3 &&
        secondChapterAns.length === 3
      ) {
        setDisabled(false);
      }
    } else if (chaptersChoice[chapterNameEngilsh] === '3') {
      if (chapterNameEngilsh === 'camuty') {
        if (
          firstChapterAns.length === 3 &&
          secondChapterAns.length === 3 &&
          thirdChapterAns.length === 3
        ) {
          setDisabled(false);
        }
      } else if (chapterNameEngilsh === 'miluly') {
        if (
          firstChapterAns.length === 2 &&
          secondChapterAns.length === 2 &&
          thirdChapterAns.length === 2
        ) {
          setDisabled(false);
        }
      } else if (
        firstChapterAns.length === 2 &&
        secondChapterAns.length === 2 &&
        thirdChapterAns.length === 2
      ) {
        setDisabled(false);
      }
    }
  }, [thirdChapterAns, secondChapterAns, firstChapterAns]);

  useEffect(() => {
    if (chapterName === 'כמותי') {
      setArrayNum(new Array(2).fill().map((_, idx) => idx + 1));
    } else if (chapterName === 'מילולי') {
      setArrayNum(new Array(2).fill().map((_, idx) => idx + 1));
    } else {
      setArrayNum(new Array(2).fill().map((_, idx) => idx + 1));
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
        <h3 className={style.title}>הזנת תשובות</h3>
        <h4>{chapterName}</h4>
        <form className={style.form_container} onSubmit={handleSubmit}>
          <h6>פרק 1: </h6>
          <Answers
            arrayNum={arrayNum}
            onRadioInput={onRadioInput1}
            uniqueName={column1}
          />
          {chaptersChoice[chapterNameEngilsh] === '2' && (
            <>
              <h6>פרק 2: </h6>
              <Answers
                arrayNum={arrayNum}
                onRadioInput={onRadioInput2}
                uniqueName={column2}
              />
            </>
          )}
          {chaptersChoice[chapterNameEngilsh] === '3' && (
            <>
              <h6>פרק 2: </h6>
              <Answers
                arrayNum={arrayNum}
                onRadioInput={onRadioInput2}
                uniqueName={column2}
              />
              <h6>פרק 3: </h6>
              <Answers
                arrayNum={arrayNum}
                onRadioInput={onRadioInput3}
                uniqueName={column3}
              />
            </>
          )}
          <Button
            className={style.submit_button}
            onClick={() => {}}
            type="submit"
            setref={submitRef}
          />
        </form>
        <Button disabled={disabled} type="submit" text={'הבא'} onClick={next} />
      </div>
    </div>
  );
}

export default RadioAns;
