import React from "react";

import { BarChart } from "./components/BarChart";
import MyPdf from "./components/Pdf/MyPdf";
import { ChartGraph } from "./components/ChartGraph";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>PDF View</h1>
      <MyPdf />

      <div className="chartsContainer">
        <h1>Bar chart</h1>
        <BarChart />
        <ChartGraph />
      </div>
    </div>
  );
}

export default App;
