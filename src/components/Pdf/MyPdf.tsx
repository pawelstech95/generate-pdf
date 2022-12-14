import React, { useState } from "react";
import { Page, PDFViewer, Document } from "@react-pdf/renderer";

import { WelcomePage } from "./WelcomePage";
import Agenda from "./Agenda";
import IntroductionPage from "./IntroductionPage";
import { BarChartPage } from "./BarChartPage";
import { BarGraphsHorizontal } from "./BarGraphsHorizontal";
import { PageWithFonts } from "./PageWithFonts";
import { FooterPage } from "./FooterPage";
import { ChartGraphPage } from "./ChartGraphPage";
import { DownloadPdf } from "./DownloadPdf";

export const MyDoc = (
  <Document>
    <Page size="A4" orientation="landscape">
      <WelcomePage />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 0 / Page 2 */}
      <Agenda section={0} />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 1  */}
      <Agenda section={1} />
    </Page>
    <Page size="A4" orientation="landscape">
      <IntroductionPage />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 2  */}
      <Agenda section={2} />
    </Page>
    <Page size="A4" orientation="landscape">
      <BarGraphsHorizontal />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 3 */}
      <Agenda section={3} />
    </Page>
    <Page size="A4" orientation="landscape">
      <PageWithFonts />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 4 */}
      <Agenda section={4} />
    </Page>
    <Page size="A4" orientation="landscape">
      <BarChartPage />
    </Page>
    <Page size="A4" orientation="landscape">
      <ChartGraphPage />
    </Page>
    <Page size="A4" orientation="landscape">
      <FooterPage />
    </Page>
  </Document>
);

const MyPdf = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <button
        style={{ marginBottom: "50px" }}
        onClick={() => setShowPdf(!showPdf)}
      >
        {showPdf ? "Hide PDF" : "Show PDF"}
      </button>
      {showPdf ? (
        <>
          <h1>Download PDF</h1>
          <DownloadPdf />

          <PDFViewer width="1200px" height="900px">
            {MyDoc}
          </PDFViewer>
        </>
      ) : null}
    </>
  );
};

export default MyPdf;
