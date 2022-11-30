import React from "react";

import { BarChart } from "./components/BarChart";
import MyPdf from "./components/Pdf/MyPdf";
import { DownloadPdf } from "./components/Pdf/DownloadPdf";
import { ChartGraph } from "./components/ChartGraph";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Download PDF</h1>
      <DownloadPdf />

      <h1>PDF View</h1>
      <MyPdf />

      <h1>Bar chart</h1>
      {/*@todo fix layout */}
      <BarChart />
      <ChartGraph />
    </div>
  );
}

export default App;
