import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

export const ChartGraph = () => {
  const cData = {
    labels: ["L 1", "L 2", "L 3", "L 4", "L 5"],
    datasets: [
      {
        label: "Label",
        data: [100, 150, 123, 170, 162],
        backgroundColor: ["red", "green", "yellow", "blue", "orange", "red"],
      },
    ],
  };
  const data = {
    labels: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    datasets: [
      {
        label: "Budget",
        backgroundColor: "rgba(59, 110, 113, 1)",
        borderColor: "rgba(59, 110, 113, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(59, 110, 113, 0.7)",
        hoverBorderColor: "rgba(59, 110, 113, 0.7)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Realise",
        backgroundColor: "rgba(168, 228, 255, 1)",
        borderColor: "rgba(168, 228, 255, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(168, 228, 255, 0.7)",
        hoverBorderColor: "rgba(168, 228, 255, 0.7)",
        data: [55, 49, 70, 71, 46, 45, 30],
      },
    ],
  };
  const options = {
    scales: {
      x: {
        stacked: true,
      },

      y: {
        stacked: true,
      },
    },
  };
  return (
    <div id="chartGraphContainer" style={{ margin: 20 }}>
      <div className="chartWrapper">
        <Bar
          id="canvasGraphFirstStats"
          data={cData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Graph with some data",
                // fontSize: 32 // @todo
              },
              legend: {
                display: true,
                position: "right",
              },
            },
          }}
          height={200}
          //@ts-ignore
          type="bar"
        />
      </div>
      <div className="chartWrapper">
        <Bar
          id="canvasGraphSecondStats"
          data={data}
          options={options}
          //@ts-ignore
          type="bar"
        />
      </div>
    </div>
  );
};
