import React, { useCallback } from "react";
import { jsPDF } from "jspdf";

const MyPdfWithJsPdf = () => {
  const handleDownloadPdf = useCallback(() => {
    const download = document.getElementById("download") as HTMLButtonElement;

    const canvas = document.getElementById(
      "canvasBarChart"
    ) as HTMLCanvasElement;
    const context = canvas.getContext("2d");

    console.log("clicked");
    console.log("download", download);
    console.log("canvas", canvas);
    console.log("context", context);

    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF();

    // @ts-ignore
    pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.save("download.pdf");
  }, []);

  return (
    <div>
      <h1>Download jsPDF</h1>
      <button id="download" onClick={handleDownloadPdf}>
        Download Bar Chart
      </button>
    </div>
  );
};

export default MyPdfWithJsPdf;
