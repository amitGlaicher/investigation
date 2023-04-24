import style from './style.module.css';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function MyAdvanced() {
  const chartRef = useRef();

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: [
          // צריך לקבל את שם הסימולציה ולהציגה בציר האיקס לשקול להכניס גם את התאריך
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'ההתקדמות שלי',
            //צריך להכנס אחוז התשובות הנכונות בכל סימולציה
            data: [65, 59, 80, 81, 56, 55, 40],
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
