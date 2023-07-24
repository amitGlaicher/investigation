import style from "./style.module.css";
import React, { useContext, useEffect, useState } from "react";
import { Pie3D } from "react-pie3d";
import { Chart } from "primereact/chart";
import Button from "../Button";

const CakeGraph = ({ setCakeGraph, handlePieClick, dataFromGraph,dataToCorrectGraph }) => {
  const [lengthChapter, setLengthChapter] = useState(20);
  // const [openSubCakeGraph, setOpenSubCakeGraph] = useState(false);
  const  [charDate,setChartData] = useState({});
  const [chartOptions,setChartOptions] = useState({});
  useEffect(() => {
    if (dataFromGraph.name === "כמותי") {
      setLengthChapter(20);
    } else if (dataFromGraph.name === "מילולי") {
      setLengthChapter(23);
    } else {
      setLengthChapter(22);
    }
  }, []);

  const handleGraphClick = (e) => {
    if (e.target.textContent.includes("נכונות")) {
    } else {
      console.log(e.target.textContent);
    }
  };

  const data = [
    {
      label: "תשובות נכונות",
      value: lengthChapter - dataFromGraph.value,
      onClick: () => handlePieClick("correct"),
    },
    {
      label: "תשובות שגויות",
      value: dataFromGraph.value,
      onClick: () => handlePieClick("incorrect"),
    },
  ];
  useEffect(() => {
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
}, []);

  return (
    <div style={{ height: "400px", width: "400px" }} onClick={handleGraphClick}>
      <Pie3D data={data} />
      <Pie3D data={data} />
      <Chart
        type="doughnut"
        data={charDate}
        options={chartOptions}
        style={{ height: "400px", width: "400px"}}
      />
      <Button text={"הקודם"} onClick={() => setCakeGraph(false)} />
    </div>
  );
};

export default CakeGraph;
