import React, { useEffect, useState } from "react";
import CakeGraph from "../../components/CakeGraph";
import ConclusionGraph from "../../components/ConclusionGraph";
import style from "./style.module.css";
import { useLocation } from "react-router-dom";

function ConclusionPage() {
  const [cakeGraph, setCakeGraph] = useState(false);
  const [dataFromGraph, setDataFromGraph] = useState();
  const { state } = useLocation();
  const handlePieClick = (type) => {
    // console.log(type);
    // setCakeGraph(false);
  };
  if (Object.keys(state.test).length > 0) {
    const toContextArray = [];
    let temp = 0;
    for (let i = 0; i < 9; i++) {
      if (i === 2) {
        if (state.test.chapters[i].title === "כמותי") {
          toContextArray.push(
            "".concat(
              state.test.chapters[i].correct
                .map((ans) => "correct")
                .concat(
                  state.test.chapters[i].incorrect.map((ans) => "incorrect")
                )
            )
          );
          temp++;
        } else {
          toContextArray.push([]);
        }
      } else if (i === 5) {
        if (state.test.chapters[i].title === "מילולי") {
          toContextArray.push(
            "".concat(
              state.test.chapters[i].correct
                .map((ans) => "correct")
                .concat(
                  state.test.chapters[i].incorrect.map((ans) => "incorrect")
                )
            )
          );
          temp++;
        } else {
          toContextArray.push([]);
        }
      } else if (i === 8) {
        if (state.test.numChapters ===8&&state.test.chapters[i].title === "אנגלית") {
          toContextArray.push(
            "".concat(
              state.test.chapters[i].correct
                .map((ans) => "correct")
                .concat(state.test.chapters[i].incorrect.map((ans) => "incorrect"))
            )
          );
          temp++;
        } else {
          toContextArray.push([]);
        }
      } else if(temp<6){
        toContextArray.push(
          "".concat(
            state.test.chapters[temp].correct
              .map((ans) => "correct")
              .concat(
                state.test.chapters[temp].incorrect.map((ans) => "incorrect")
              )
          )
        );
        temp++;
      }
    }
    console.log(toContextArray.map(chapter=>{
      if(!Array.isArray(chapter)){
        return chapter.split(",")
      }
      else{
        return chapter
      }
    }))
    console.log(toContextArray);
  }
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
