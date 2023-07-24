import style from "./style.module.css";
import React, { useContext, useEffect, useState } from "react";
import { Pie3D } from "react-pie3d";
import { Chart } from "primereact/chart";
import Button from "../Button";

const CakeGraph = ({ setCakeGraph, handlePieClick, dataFromGraph,dataToCorrectGraph,dataToCorrectGraphIncorrect }) => {
  const [lengthChapter, setLengthChapter] = useState(0);
  // const [openSubCakeGraph, setOpenSubCakeGraph] = useState(false);
  const  [charData,setChartData] = useState({});
  const  [chartDataCorrect,setChartDataCorrect] = useState({});
  const  [chartDataIncorrect,setChartDataIncorrect] = useState({});
  const [chartOptions,setChartOptions] = useState({});
  const [chapterName,setChapterName] = useState()
  useEffect(() => {
    if (dataFromGraph.name === "כמותי") {
      setLengthChapter(20);
      setChapterName('camuty')
    } else if (dataFromGraph.name === "מילולי") {
      setLengthChapter(23);
      setChapterName('miluly')
    } else {
      setLengthChapter(22);
      setChapterName('english')
    }
  }, []);

  const handleGraphClick = (e) => {
    if (e.target.textContent.includes("נכונות")) {
    } else {
      console.log(e.target.textContent);
    }
  };
  useEffect(() => {
    console.log(chapterName);
    if(chapterName){
      const tempData = {
        labels: ['correct', 'incorrect'],
        datasets: [
          {
            data: [lengthChapter - dataFromGraph.value,dataFromGraph.value],
            backgroundColor: [
              'blue', 
              'yellow', 
            ],
            hoverBackgroundColor: [
              "blue", 
              'yellow',
            ]
          }
        ]
      }
      const tempDataCorrect = {
        labels: dataToCorrectGraph[chapterName].map(ans=>ans["גורם קושי"]),
        datasets: [
          {
            data: dataToCorrectGraph[chapterName].map(ans=>ans.repeated),
            backgroundColor: [
              'blue', 
              'yellow', 
            ],
            hoverBackgroundColor: [
              "blue", 
              'yellow',
            ]
          }
        ]
      }
      const tempDataIncorrect = {
        labels: dataToCorrectGraph[chapterName].map(ans=>ans["גורם קושי"]),
        datasets: [
          {
            data: dataToCorrectGraph[chapterName].map(ans=>ans.repeated),
            backgroundColor: [
              'rgb(200, 200, 200)', 
              'yellow', 
            ],
            hoverBackgroundColor: [
              "blue", 
              'yellow',
            ]
          }
        ]
      }
      const options = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true
            }
          }
        }
      };
      
      setChartData(tempData);
      setChartOptions(options);
      setChartDataCorrect(tempDataCorrect)
      setChartDataIncorrect(tempDataIncorrect)
    }
}, [lengthChapter]);

  return (
    <div style={{ height: "400px", width: "400px" }} onClick={handleGraphClick}>
      <label>פילוח תשובות</label>
      <Chart
        type="doughnut"
        data={charData}
        options={chartOptions}
        style={{ height: "400px", width: "400px"}}
      />
      <label>תשובות נכונות גורמי קושי</label>
      <Chart
        type="doughnut"
        data={chartDataCorrect}
        options={chartOptions}
        style={{ height: "400px", width: "400px"}}
      />
      <label>תשובות לא נכונות גורמי קושי</label>
      <Chart
        type="doughnut"
        data={chartDataIncorrect}
        options={chartOptions}
        style={{ height: "400px", width: "400px"}}
      />
      <Button text={"הקודם"} onClick={() => setCakeGraph(false)} />
    </div>
  );
};

export default CakeGraph;
