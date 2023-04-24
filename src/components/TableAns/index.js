import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ansContext } from '../../App';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import Camuty from '../Camuty';
import English from '../English';
import Miluly from '../Miluly';
import style from './style.module.css';
import apiCalls from '../../Helpers/apiCalls.js';

function TableAns() {
  const submitRef = useRef();
  const answerContext = useContext(ansContext);
  const [numClickNext, setNumClickNext] = useState(0);
  const [arrayToMap, setArrayToMap] = useState([]);
  const [chapter, setChapter] = useState();
  const [useData, setUseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { data } = useForm();
  const answers = [];
  const title = JSON.parse(localStorage.getItem('chapters'));

  let numLoops = 0;
  const arraybigData = [];
  const createBigArray = async () => {
    const statesArray = answerContext.map(([state]) => state);
    statesArray.forEach((chapter) => {
      if (chapter.length <= 1) {
        return;
      }
      let object = { title: '', correct: [], incorrect: [] };
      console.log(useData[numLoops]);
      object.title = useData[numLoops].title;
      chapter.forEach((value) => {
        if (value === 'correct') {
          object.correct.push(useData[numLoops]);
          numLoops++;
        } else if (value === 'incorrect') {
          object.incorrect.push(useData[numLoops]);
          numLoops++;
        }
      });
      arraybigData.push(object);
    });
  };
  const sendUseData = async () => {
    await createBigArray();
    const chapters = JSON.parse(localStorage.chapters);
    await apiCalls('put', 'user/addtest', {
      simulationName: chapters.simName,
      numChapters: chapters.num,
      data: arraybigData,
    });
    navigate('../nextPage');
  };

  useEffect(() => {
    answerContext.forEach((array) => {
      if (array[0].length > 0) {
        answers.push(
          array[0]
            .map((answer, index) => {
              if (answer === 'correct') return index;
              else return false;
            })
            .filter((answer) => answer !== false)
        );
        answers.push(
          array[0]
            .map((answer, index) => {
              if (answer === 'incorrect') return index;
              else return false;
            })
            .filter((answer) => answer !== false)
        );
      }
    });
    if (title.name.length === 3) {
      if (numClickNext < title.camuty * 2) setChapter('כמותי');
      else if (numClickNext < title.camuty * 2 + title.miluly * 2)
        setChapter('מילולי');
      else if (
        numClickNext <
        title.camuty * 2 + title.miluly * 2 + title.english * 2
      )
        setChapter('אנגלית');
      else {
        setLoading(true);
        sendUseData();
        return;
      }
      if (numClickNext < answers.length && answers[numClickNext].length > 0)
        setArrayToMap(answers[numClickNext]);
      else setNumClickNext((prev) => ++prev);
    } else {
      if (title.name[0] === 'כמותי') setChapter('כמותי');
      else if (title.name[0] === 'מילולי') setChapter('מילולי');
      else setChapter('אנגלית');
      if (answers[numClickNext].length > 0)
        setArrayToMap(answers[numClickNext]);
      else setLoading(true);
      sendUseData();
    }
  }, [numClickNext]);

  const onClick = () => {
    setNumClickNext((prev) => ++prev);
    submitRef.current.click();
  };

  const onSubmit = (data) => {
    data.preventDefault();
    const correct = [
      'מספר שאלה',
      'נושא',
      'תת נושא',
      'גורם קושי',
      'דרך פתרון',
      'סוג לקח',
      'לקח יישומי',
    ];
    const incorrect = [
      'מספר שאלה',
      'נושא',
      'תת נושא',
      'גורם קושי',
      'סוג הטעות',
      'הסיבה לטעות',
      'דרך פתרון',
      'סוג לקח',
      'לקח יישומי',
    ];
    const value = [...data.target];
    let print = { title: chapter };

    if (numClickNext % 2 === 0) {
      for (let i = 0; i < value.length; i++) {
        if (value[i].value) {
          print[correct[i % 7]] = value[i].value;
        }
      }
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].value) {
          print[incorrect[i % 9]] = value[i].value;
        }
      }
    }
    setUseData((prev) => [...prev, print]);
    console.log(useData);
  };

  return loading ? (
    <h2>טוען</h2>
  ) : (
    <div className={style.tableAns_container}>
      <h2 className={style.title}>{`פרק ${chapter}`}</h2>
      {numClickNext % 2 !== 1 ? (
        <h4 className={style.title}>תשובות נכונות </h4>
      ) : (
        <h4 className={style.title}>תשובות שגויות </h4>
      )}
      <form className={style.form} onSubmit={onSubmit}>
        <table className={style.all_table}>
          <thead className={style.thead}>
            <tr className={style.tr_cell}>
              <th className={style.thead_cell}>
                מספר<br></br> שאלה
              </th>
              <th className={style.thead_cell}>נושא</th>
              {chapter !== 'אנגלית' && (
                <th className={style.thead_cell}>
                  תת <br></br> נושא
                </th>
              )}
              <th className={style.thead_cell}>
                גורם <br></br> קושי
              </th>
              {numClickNext % 2 === 1 && (
                <>
                  {chapter === 'כמותי' && (
                    <th className={style.thead_cell}>
                      סוג <br></br> הטעות
                    </th>
                  )}
                  <th className={style.thead_cell}>
                    הסיבה <br></br> לטעות
                  </th>
                </>
              )}
              {chapter === 'כמותי' && (
                <th className={style.thead_cell}>
                  דרך <br></br> פתרון
                </th>
              )}
              <th className={style.thead_cell}>
                סוג <br></br> לקח
              </th>
              <th className={style.thead_cell}>
                לקח <br></br> יישומי
              </th>
              {chapter === 'אנגלית' && (
                <th className={style.thead_cell}>
                  מילה <br></br> חדשה{' '}
                </th>
              )}
            </tr>
          </thead>
          {chapter === 'כמותי' && (
            <Camuty
              arrayToMap={arrayToMap}
              numClickNext={numClickNext}
              data={data}
            />
          )}
          {chapter === 'מילולי' && (
            <Miluly
              arrayToMap={arrayToMap}
              numClickNext={numClickNext}
              data={data}
            />
          )}
          {chapter === 'אנגלית' && (
            <English
              arrayToMap={arrayToMap}
              numClickNext={numClickNext}
              data={data}
            />
          )}
        </table>
        <Button
          className={style.submit_button}
          onClick={() => {}}
          type="submit"
          setref={submitRef}
        />
      </form>
      <Button text={'הבא'} onClick={onClick} />
    </div>
  );
}
export default TableAns;
