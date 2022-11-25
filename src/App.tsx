import React from "react";

import { BarChart } from "./components/BarChart";
import MyPdf from "./components/Pdf/MyPdf";
import { DownloadPdf } from "./components/Pdf/DownloadPdf";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bar chart</h1>
      <BarChart />

      <h1>Download PDF</h1>
      <DownloadPdf />

      <h1>Generate PDF</h1>
      <MyPdf />
    </div>
  );
}

export default App;
