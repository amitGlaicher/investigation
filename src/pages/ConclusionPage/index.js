import React, { useContext, useEffect, useState } from "react";
import CakeGraph from "../../components/CakeGraph";
import ConclusionGraph from "../../components/ConclusionGraph";
import style from "./style.module.css";
import { useLocation } from "react-router-dom";
import { ansContext } from "../../App";
import createDataGraph from "../../Helpers/createDataGraph";

function ConclusionPage() {
  const [cakeGraph, setCakeGraph] = useState(false);
  const [dataFromGraph, setDataFromGraph] = useState();
  const answerContext = useContext(ansContext);
  const { state } = useLocation();
  const dataToCorrectGraph = createDataGraph(state.test.chapters)
  const handlePieClick = (type) => {
    // console.log(type);
    // setCakeGraph(false);
  };
  const toLocalStorage = () => {
    let camuty = 0;
    let miluly = 0;
    let english = 0;
    const name = [];
    state.test.chapters.forEach((chapter) => {
      switch (chapter.title) {
        case "כמותי":
          if (camuty == 0) name.push("כמותי");
          camuty++;
          break;
        case "מילולי":
          if (miluly == 0) name.push("מילולי");
          miluly++;
          break;
        case "אנגלית":
          if (english == 0) name.push("אנגלית");
          english++;
          break;
      }
    });
    localStorage.setItem(
      "chapters",
      JSON.stringify({
        camuty,
        date: state.test.createDate,
        english,
        miluly,
        name,
        num: state.test.numChapters,
        simName: state.test.simulationName,
      })
    );
  };
  if (Object.keys(state.test).length > 0) {
    const toContextArray = [];
    let temp = 0;

    for (let i = 0; i < 9; i++) {
      console.log(state.test.chapters[i]?.title);
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
        if (
          state.test.numChapters === 8 &&
          state.test.chapters[i].title === "אנגלית"
        ) {
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
      } else if (temp < 6) {
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
    if (!localStorage.getItem("chapters")) {
      toLocalStorage();
      answerContext.forEach((event, index) => {
        event[1](
          toContextArray[index].length > 0
          ? toContextArray[index].split(",")
          : []
          );
        });
      }
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
          dataToCorrectGraph={dataToCorrectGraph}
        />
      )}
    </div>
  );
}

export default ConclusionPage;
