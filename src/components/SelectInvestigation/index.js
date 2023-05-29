import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import Choose from '../Choose';
import style from './style.module.css';

const firstChoice = ['מבחן', 'פרק'];
const numSumChapters = ['6', '8'];
const topicChapter = ['כמותי', 'מילולי', 'אנגלית'];
const numChapter = ['2', '3'];

function SelectInvestigation() {
  const [firstChoiceSet, setFirstChoiceSet] = useState('מבחן');
  const [simulationName, setSimulationName] = useState();
  const [simulationDate, setSimulationDate] = useState();
  const [chapterName, setChapterName] = useState('כמותי');
  const [numChapterSet, setNumChapterSet] = useState('6');
  const [numCamuty, setNumCamuty] = useState('2');
  const [numMiluly, setNumMiluly] = useState('2');
  const [numEnglish, setNumEnglish] = useState('2');
  const [disabledNext, setDisabledNext] = useState(true);
  const navigate = useNavigate();
  const onClick = () => {
    localStorage.setItem(
      'chapters',
      JSON.stringify({
        name: firstChoiceSet === 'פרק' ? [chapterName] : topicChapter,
        date: simulationDate,
        simName: simulationName,
        num: firstChoiceSet === 'פרק' ? null : numChapterSet,
        camuty: firstChoiceSet === 'פרק' ? null : numCamuty,
        miluly: firstChoiceSet === 'פרק' ? null : numMiluly,
        english: firstChoiceSet === 'פרק' ? null : numEnglish,
      })
    );
    navigate('./radioAnsPage');
  };
  useEffect(() => {
    if (
      simulationDate &&
      simulationName &&
      (Number(numCamuty) + Number(numMiluly) + Number(numEnglish) === 8 ||
        numChapterSet === '6')
    ) {
      setDisabledNext(false);
    } else {
      setDisabledNext(true);
    }
  }, [
    numCamuty,
    numMiluly,
    numEnglish,
    numChapterSet,
    simulationDate,
    simulationName,
  ]);
  return (
    <div className={style.selectInvestigation}>
      <h2 className={style.title}>תחקור חדש</h2>
      <table className={style.table}>
        <tbody>
          <tr>
            <td>מה תרצה לתחקר?</td>
            <td>
              <Choose
                array={firstChoice}
                choice={setFirstChoiceSet}
                name={firstChoiceSet}
              />
            </td>
          </tr>
          <tr>
            <td> שם הסימולציה:</td>
            <td>
              <Input type={'text'} placeholder={"שם הסימולציה"} setState={setSimulationName} />
            </td>
          </tr>
          <tr>
            <td> תאריך ביצוע:</td>
            <td>
              <Input type={'date'} setState={setSimulationDate} />
            </td>
          </tr>
          {firstChoiceSet === 'מבחן' && (
            <>
              <tr>
                <td>מספר פרקים</td>
                <td>
                  <Choose array={numSumChapters} choice={setNumChapterSet} />
                </td>
              </tr>
              {numChapterSet === '8' && (
                <tr>
                  <td>כמותי</td>
                  <td>
                    <Choose array={numChapter} choice={setNumCamuty} />
                  </td>
                </tr>
              )}
              {numChapterSet === '8' && (
                <tr>
                  <td>מילולי</td>
                  <td>
                    <Choose array={numChapter} choice={setNumMiluly} />
                  </td>
                </tr>
              )}
              {numChapterSet === '8' && (
                <tr>
                  <td>אנגלית</td>
                  <td>
                    <Choose array={numChapter} choice={setNumEnglish} />
                  </td>
                </tr>
              )}
            </>
          )}

          {firstChoiceSet === 'פרק' && (
            <tr>
              <td>בחר פרק</td>
              <td>
                <Choose array={topicChapter} choice={setChapterName} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {firstChoiceSet && (
        <Button text={'הבא'} disabled={disabledNext} onClick={onClick} />
      )}
    </div>
  );
}

export default SelectInvestigation;
