import React from "react";
import { Page, PDFViewer, Document } from "@react-pdf/renderer";
import { FirstPdfPage } from "./FirstPdfPage";
import Agenda from "./Agenda";
import FourthPdfPage from "./FourthPdfPage";

const MyPdf = () => {
  return (
    <PDFViewer width="1200px" height="900px">
      <Document>
        <Page size="A4" orientation="landscape">
          <FirstPdfPage />
        </Page>
        <Page size="A4" orientation="landscape">
          {/* Page 3 */}
          <Agenda />
        </Page>
        <Page size="A4" orientation="landscape">
          {/* Page 4 */}
          <Agenda />
        </Page>
        <Page size="A4" orientation="landscape">
          <FourthPdfPage />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyPdf;
