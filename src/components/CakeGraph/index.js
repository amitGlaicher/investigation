import style from "./style.module.css";
import React, { useContext, useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import Button from "../Button";

const CakeGraph = ({
  setCakeGraph,
  handlePieClick,
  dataFromGraph,
  dataToCorrectGraph,
  dataToCorrectGraphIncorrect,
  dataMistakeReason,
}) => {
  const [lengthChapter, setLengthChapter] = useState(0);
  const [charData, setChartData] = useState({});
  const [chartDataCorrect, setChartDataCorrect] = useState({});
  const [chartDataIncorrect, setChartDataIncorrect] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [chapterName, setChapterName] = useState();

  console.log(dataMistakeReason);

  function getRandomRgbValue() {
    return Math.floor(Math.random() * 256); // Generate a random number between 0 and 255
  }

  function getRandomRgbArray(length) {
    const rgbArray = [];
    for (let i = 0; i < length; i++) {
      const r = getRandomRgbValue();
      const g = getRandomRgbValue();
      const b = getRandomRgbValue();
      const rgbValue = `rgb(${r}, ${g}, ${b})`;
      rgbArray.push(rgbValue);
    }
    return rgbArray;
  }

  useEffect(() => {
    if (dataFromGraph.name === "כמותי") {
      setLengthChapter(20);
      setChapterName("camuty");
    } else if (dataFromGraph.name === "מילולי") {
      setLengthChapter(23);
      setChapterName("miluly");
    } else {
      setLengthChapter(22);
      setChapterName("english");
    }
  }, []);

  const handleGraphClick = (e) => {
    if (e.target.textContent.includes("נכונות")) {
    } else {
      console.log(e.target.textContent);
    }
  };
  useEffect(() => {
    if (chapterName) {
      const tempData = {
        labels: ["תשובות נכונות", "תשובות שגויות"],
        datasets: [
          {
            data: [lengthChapter - dataFromGraph.value, dataFromGraph.value],
            backgroundColor: getRandomRgbArray(2),
            hoverBackgroundColor: getRandomRgbArray(2),
          },
        ],
      };
      const tempDataCorrect = {
        labels: dataToCorrectGraph[chapterName].map((ans) => ans["גורם קושי"]),
        datasets: [
          {
            data: dataToCorrectGraph[chapterName].map((ans) => ans.repeated),
            backgroundColor: getRandomRgbArray(
              dataToCorrectGraph[chapterName].length
            ),
            hoverBackgroundColor: getRandomRgbArray(
              dataToCorrectGraph[chapterName].length
            ),
          },
        ],
      };
      const tempDataIncorrect = {
        labels: dataToCorrectGraphIncorrect[chapterName].map(
          (ans) => ans["גורם קושי"]
        ),
        datasets: [
          {
            data: dataToCorrectGraphIncorrect[chapterName].map(
              (ans) => ans.repeated
            ),
            backgroundColor: getRandomRgbArray(
              dataToCorrectGraphIncorrect[chapterName].length
            ),
            hoverBackgroundColor: getRandomRgbArray(
              dataToCorrectGraphIncorrect[chapterName].length
            ),
          },
        ],
      };
      const options = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
            },
          },
        },
      };

      setChartData(tempData);
      setChartOptions(options);
      setChartDataCorrect(tempDataCorrect);
      setChartDataIncorrect(tempDataIncorrect);
    }
  }, [lengthChapter]);

  return (
    <div className={style.pieGraph} onClick={handleGraphClick}>
      <label>פילוח תשובות</label>
      <Chart
        type="doughnut"
        data={charData}
        options={chartOptions}
        style={{ height: "300px", width: "300px" }}
      />
      <div className={style.pieGraphMore}>
        <div>
          <label>תשובות נכונות גורמי קושי</label>
          <Chart
            type="doughnut"
            data={chartDataCorrect}
            options={chartOptions}
            style={{ height: "250px", width: "250px" }}
          />
        </div>
        <div>
          <label>תשובות לא נכונות גורמי קושי</label>
          <Chart
            type="doughnut"
            data={chartDataIncorrect}
            options={chartOptions}
            style={{ height: "250px", width: "250px" }}
          />
        </div>
        {/* <div>
          <label>הסיבה לטעות:</label>
          <ul>
            {dataMistakeReason[chapterName].map((mistakeReason, index) => (
              <li key={index}>{mistakeReason}</li>
            ))}
          </ul>
        </div> */}
      </div>
      <Button text={"הקודם"} onClick={() => setCakeGraph(false)} />
    </div>
  );
};

export default CakeGraph;
