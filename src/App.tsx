import React from "react";
import { DownloadPdf } from "./Pdf/DownloadPdf";

import MyPdf from "./Pdf/MyPdf";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Download PDF</h1>
      <DownloadPdf />
      <h1>Generate PDF</h1>
      <MyPdf />
    </div>
  );
}

export default App;
