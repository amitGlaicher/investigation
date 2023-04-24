import React, { useState } from 'react';
import CakeGraph from '../../components/CakeGraph';
import ConclusionGraph from '../../components/ConclusionGraph';
import style from './style.module.css';

function ConclusionPage() {
  const [cakeGraph, setCakeGraph] = useState(false);
  const [dataFromGraph, setDataFromGraph] = useState();

  const handlePieClick = (type) => {
    // console.log(type);
    // setCakeGraph(false);
  };
  return (
    <div className={style.conclusionPage}>
      {!cakeGraph ? (
        <ConclusionGraph
          setCakeGraph={setCakeGraph}
          setDataFromGraph={setDataFromGraph}
        />
      ) : (
        <CakeGraph
          setCakeGraph={setCakeGraph}
          handlePieClick={handlePieClick}
          dataFromGraph={dataFromGraph}
        />
      )}
    </div>
  );
}

export default ConclusionPage;
