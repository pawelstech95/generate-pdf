import React from "react";
import { Page, PDFViewer, Document } from "@react-pdf/renderer";
import { FirstPdfPage } from "./FirstPdfPage";
import SecondPdfPage from "./SecondPdfPage";

const MyPdf = () => {
  return (
    <PDFViewer width="1200px" height="900px">
      <Document>
        <Page size="A4" orientation="landscape">
          <FirstPdfPage />
        </Page>
        <Page size="A4" orientation="landscape">
          <SecondPdfPage />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyPdf;
