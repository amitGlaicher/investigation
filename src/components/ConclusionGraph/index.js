import React, { useContext, useEffect, useState } from 'react';
import style from './style.module.css';
import { ansContext } from '../../App';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function ConclusionGraph({ setCakeGraph, setDataFromGraph}) {
  let camutyLength,milulyLength, englishLength 
  const [dataGraph, setDataGraph] = useState();
  const [render, setRender] = useState();
  const [moreRender, setMoreRender] = useState();
  const [dataCorrect, setData] = useState({
    camuty: [],
    miluly: [],
    english: [],
  });
  const title = JSON.parse(localStorage.getItem('chapters'));
  const answerContext = useContext(ansContext);
  useEffect(() => {
    // if(Object.keys(test).length>0){
    //   console.log(test);
    //   const chapters = test.chapters
    //   if (chapters[0].title==='כמותי'&&test.numChapters===1) {
    //     const camutyArray = chapters[0].correct;
    //     setData((prevData) => ({ ...prevData, camuty: camutyArray }));
    //   } else if(chapters[2].title==='כמותי' ) {
    //     const camutyArray = chapters[0].correct;
    //     .concat(answerContext[1][0])
    //     .concat(answerContext[2][0]);
    //     setData((prevData) => ({ ...prevData, camuty: camutyArray }));
    //   }
    //   else{
    //     const camutyArray = answerContext[0][0].concat(answerContext[1][0]);
    //     setData((prevData) => ({ ...prevData, camuty: camutyArray }));
    //   } 
      
    //   if (title['miluly'] === '1') {
    //     const milulyArray = answerContext[0][0];
    //     setData((prevData) => ({ ...prevData, miluly: milulyArray }));
    //   } else if (title['miluly'] === '2') {
    //     const milulyArray = answerContext[3][0].concat(answerContext[4][0]);
    //     setData((prevData) => ({ ...prevData, miluly: milulyArray }));
    //   } else {
    //     const milulyArray = answerContext[3][0]
    //     .concat(answerContext[4][0])
    //     .concat(answerContext[5][0]);
    //     setData((prevData) => ({ ...prevData, miluly: milulyArray }));
    //   }
      
    //   if (title['english'] === '1') {
    //     const englishArray = answerContext[0][0];
    //     setData((prevData) => ({ ...prevData, english: englishArray }));
    //   } else if (title['english'] === '2') {
    //     const englishArray = answerContext[6][0].concat(answerContext[7][0]);
    //     setData((prevData) => ({ ...prevData, english: englishArray }));
    //   } else {
    //     const englishArray = answerContext[6][0]
    //     .concat(answerContext[7][0])
    //     .concat(answerContext[8][0]);
    //     setData((prevData) => ({ ...prevData, english: englishArray }));
    //   }
    // }
    // else{
      if (title['camuty'] === '1') {
        const camutyArray = answerContext[0][0];
        setData((prevData) => ({ ...prevData, camuty: camutyArray }));
      } else if (title['camuty'] === '2') {
        const camutyArray = answerContext[0][0].concat(answerContext[1][0]);
        setData((prevData) => ({ ...prevData, camuty: camutyArray }));
      } else {
        const camutyArray = answerContext[0][0]
        .concat(answerContext[1][0])
        .concat(answerContext[2][0]);
        setData((prevData) => ({ ...prevData, camuty: camutyArray }));
      }
      
      if (title['miluly'] === '1') {
        const milulyArray = answerContext[0][0];
        setData((prevData) => ({ ...prevData, miluly: milulyArray }));
      } else if (title['miluly'] === '2') {
        const milulyArray = answerContext[3][0].concat(answerContext[4][0]);
        setData((prevData) => ({ ...prevData, miluly: milulyArray }));
      } else {
        const milulyArray = answerContext[3][0]
        .concat(answerContext[4][0])
        .concat(answerContext[5][0]);
        setData((prevData) => ({ ...prevData, miluly: milulyArray }));
      }
      
      if (title['english'] === '1') {
        const englishArray = answerContext[0][0];
        setData((prevData) => ({ ...prevData, english: englishArray }));
      } else if (title['english'] === '2') {
        const englishArray = answerContext[6][0].concat(answerContext[7][0]);
        setData((prevData) => ({ ...prevData, english: englishArray }));
      } else {
        const englishArray = answerContext[6][0]
        .concat(answerContext[7][0])
        .concat(answerContext[8][0]);
        setData((prevData) => ({ ...prevData, english: englishArray }));
      // }
    }
      
    camutyLength=
        dataCorrect['camuty'].filter((correct) => correct === 'correct').length
    milulyLength=
          dataCorrect['miluly'].filter((correct) => correct === 'correct').length
    englishLength=
      dataCorrect['english'].filter((correct) => correct === 'correct').length
    if (!render) {
      setRender(true);
    } else {
      if (!moreRender) {
        setMoreRender(true);
      }
      setDataGraph([
        {
          name: 'כמותי',
          'תשובות נכונות': camutyLength,
          'תשובות שגויות': 20 - camutyLength,
          amt: 2400,
        },
        {
          name: 'מילולי',
          'תשובות נכונות': milulyLength,
          'תשובות שגויות': 23 - milulyLength,
          amt: 2210,
        },
        {
          name: 'אנגלית',
          'תשובות נכונות': englishLength,
          'תשובות שגויות': 22 - englishLength,
          amt: 2290,
        },
      ]);
    }
  }, [render, moreRender]);
  return (
    <div className={style.concTest}>
      <h2> סיכום מבחן </h2>
      <BarChart width={1000} height={600} data={dataGraph}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="תשובות נכונות"
          fill="#8884d8"
          onClick={(e) => {
            // console.log(setDataFromGraph);
            setDataFromGraph(e);
            setCakeGraph(true);
          }}
        />
        <Bar
          dataKey="תשובות שגויות"
          fill="#82ca9d"
          onClick={(e) => {
            setDataFromGraph(e);
            setCakeGraph(true);
          }}
        />
      </BarChart>
    </div>
  );
}

export default ConclusionGraph;
