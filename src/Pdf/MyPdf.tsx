import React from "react";
import { Page, PDFViewer, Document } from "@react-pdf/renderer";

import { FirstPdfPage } from "./FirstPdfPage";
import Agenda from "./Agenda";
import FourthPdfPage from "./FourthPdfPage";

export const MyDoc = (
  <Document>
    <Page size="A4" orientation="landscape">
      <FirstPdfPage />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 0 / Page 2 */}
      <Agenda section={0} />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 1 / Page 3 */}
      <Agenda section={1} />
    </Page>
    <Page size="A4" orientation="landscape">
      <FourthPdfPage />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 2 / Page @todo */}
      <Agenda section={2} />
    </Page>
  </Document>
);

const MyPdf = () => (
  <PDFViewer width="1200px" height="900px">
    {MyDoc}
  </PDFViewer>
); // @todo is that correct?

export default MyPdf;
