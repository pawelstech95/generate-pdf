import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import Chart from "chart.js/auto";

import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

// origin source https://codesandbox.io/s/bar-chart-react-sample-iw9q3?file=/src/App.js

const data = {
  labels: [
    ["Sprint", "11"],
    ["Sprint", "12"],
    ["Sprint", "13"],
    ["Sprint", "14"],
    ["Sprint 15", "(Latest)"],
  ],
  datasets: [
    {
      categoryPercentage: 1,
      label: "Sprint Velocity",
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        "rgba(99, 99, 234, 1)",
        "rgba(99, 99, 234, 0.7)",
        "rgba(99, 99, 234, 0.4)",
        "rgba(99, 99, 234, 0.1)",
        "rgba(236, 91, 86, 1)",
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Sprint Velocity",
      padding: {
        bottom: 20,
      },
      weight: "bold",
      color: "#00325c",
      font: {
        size: 13,
      },
      align: "center",
    },
    datalabels: {
      display: true,
      color: "white",
      align: "bottom",
      padding: {
        right: 0,
      },
      labels: {
        padding: { top: 1 },
        title: {
          font: {
            weight: "bold",
            size: 24,
          },
        },
        // value: {
        //   color: "green"
        // }
      },
      // formatter: function (value) {
      //   return "\n" + value;
      // }
    },
  },
};

const BarChart = () => (
  <>
    <div
      style={{
        height: "500px",
        width: "1000px",
        margin: "0 auto",
      }}
    >
      {/*@ts-ignore*/}
      <Bar data={data} options={options} />
    </div>
  </>
);

export default BarChart;
