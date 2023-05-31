import style from './style.module.css';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { useContext } from 'react';
import { userContext } from '../LayOut';

function MyAdvanced() {
  const chartRef = useRef();
  const {user} = useContext(userContext)

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: user.test.map(test => `שם ותאריך בחינה: ${test.simulationName} ${test.createDate} `),
        datasets: [
          {
            label: 'ההתקדמות שלי',
            data: user.test.map(test => (test.correctAnswer / test.sumAnswers) * 100),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      
    });
    return () => myChart.destroy();
  }, []);

  return <canvas ref={chartRef} />;
}

export default MyAdvanced;
