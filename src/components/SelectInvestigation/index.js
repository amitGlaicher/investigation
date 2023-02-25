import React, { useState } from 'react';
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
  const [chapterName, setChapterName] = useState('כמותי');
  const [numChapterSet, setNumChapterSet] = useState('6');
  const [numCamuty, setNumCamuty] = useState('2');
  const [numMiluly, setNumMiluly] = useState('2');
  const [numEnglish, setNumEnglish] = useState('2');
  const navigate = useNavigate();
  const onClick = () => {
    navigate('./RadioAns');
  };
  return (
    <div className={style.selectInvestigation}>
      <h2 className={style.title}>תחקור</h2>
      <table className={style.table}>
        <tbody>
          <tr>
            <td>מה תרצה לתחקר?</td>
            <td>
              <Choose
                array={firstChoice}
                disabled={undefined}
                choice={setFirstChoiceSet}
              />
            </td>
          </tr>
          {firstChoiceSet === 'מבחן' && (
            <>
              <tr>
                <td> שם הסימולציה</td>
                <td>
                  <Input />
                </td>
              </tr>
              <tr>
                <td>מספר פרקים</td>
                <td>
                  <Choose
                    array={numSumChapters}
                    disabled={undefined}
                    choice={setNumChapterSet}
                  />
                </td>
              </tr>
              <tr>
                <td>כמותי</td>
                <td>
                  <Choose
                    array={numChapter}
                    disabled={undefined}
                    choice={setNumCamuty}
                  />
                </td>
              </tr>
              <tr>
                <td>מילולי</td>
                <td>
                  <Choose
                    array={numChapter}
                    disabled={undefined}
                    choice={setNumMiluly}
                  />
                </td>
              </tr>
              <tr>
                <td>אנגלית</td>
                <td>
                  <Choose
                    array={numChapter}
                    disabled={undefined}
                    choice={setNumEnglish}
                  />
                </td>
              </tr>
            </>
          )}

          {firstChoiceSet === 'פרק' && (
            <>
              <td>בחר פרק</td>
              <td>
                <Choose
                  array={topicChapter}
                  disabled={undefined}
                  choice={setChapterName}
                />
              </td>
            </>
          )}
        </tbody>
      </table>
      {firstChoiceSet && <Button text={'הבא'} onClick={onClick} />}
    </div>
  );
}

export default SelectInvestigation;
