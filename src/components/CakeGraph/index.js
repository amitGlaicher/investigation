import style from './style.module.css';
import React, { useContext, useEffect, useState } from 'react';
import { Pie3D } from 'react-pie3d';
import Button from '../Button';

const CakeGraph = ({ setCakeGraph, handlePieClick, dataFromGraph }) => {
  const [lengthChapter, setLengthChapter] = useState(20);
  // const [openSubCakeGraph, setOpenSubCakeGraph] = useState(false);

  useEffect(() => {
    if (dataFromGraph.name === 'כמותי') {
      setLengthChapter(20);
    } else if (dataFromGraph.name === 'מילולי') {
      setLengthChapter(23);
    } else {
      setLengthChapter(22);
    }
  }, []);

  const handleGraphClick = (e) => {
    if (e.target.textContent.includes('נכונות')) {
    } else {
      console.log(e.target.textContent);
    }
  };

  
  const data = [
    {
      label: 'תשובות נכונות',
      value: lengthChapter - dataFromGraph.value,
      onClick: () => handlePieClick('correct'),
    },
    {
      label: 'תשובות שגויות',
      value: dataFromGraph.value,
      onClick: () => handlePieClick('incorrect'),
    },
  ];


  return (
    <div style={{ height: '400px', width: '400px' }} onClick={handleGraphClick}>
      <Pie3D data={data} />
      <Button text={'הקודם'} onClick={() => setCakeGraph(false)} />
    </div>
  );
};

export default CakeGraph;
