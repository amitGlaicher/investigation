import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
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
  const [disabledNext, setDisabledNext] = useState(true);
  const navigate = useNavigate();
  const onClick = () => {
    localStorage.setItem("chapters",JSON.stringify({name:firstChoiceSet==='פרק'?[chapterName]:topicChapter,num:numChapterSet,'camuty':numCamuty,'miluly':numMiluly,'english':numEnglish}))
    navigate('./RadioAns');
  };

  useEffect(()=>{
    if(Number(numCamuty)+Number(numMiluly)+Number(numEnglish)===8||numChapterSet==='6'){
      setDisabledNext(false)
    }
    else{
      setDisabledNext(true)
    }    
  },[numCamuty,numMiluly,numEnglish,numChapterSet])
  
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
              {numChapterSet==='8'&&<tr>
                <td>כמותי</td>
                <td>
                  <Choose
                    array={numChapter}
                    disabled={undefined}
                    choice={setNumCamuty}
                  />
                </td>
              </tr>}
              {numChapterSet==='8'&&<tr>
                <td>מילולי</td>
                <td>
                  <Choose
                    array={numChapter}
                    disabled={undefined}
                    choice={setNumMiluly}
                  />
                </td>
              </tr>}
              {numChapterSet==='8'&&<tr>
                <td>אנגלית</td>
                <td>
                  <Choose
                    array={numChapter}
                    disabled={undefined}
                    choice={setNumEnglish}
                  />
                </td>
              </tr>}
            </>
          )}

          {firstChoiceSet === 'פרק' && (
            <tr>
              <td>בחר פרק</td>
              <td>
                <Choose
                  array={topicChapter}
                  disabled={undefined}
                  choice={setChapterName}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {firstChoiceSet && <Button text={'הבא'} disabled={disabledNext} onClick={onClick} />}
    </div>
  );
}

export default SelectInvestigation;
