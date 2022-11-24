import React from "react";
import { Page, PDFViewer, Document, Canvas, View } from "@react-pdf/renderer";

import { WelcomePage } from "./WelcomePage";
import Agenda from "./Agenda";
import IntroductionPage from "./IntroductionPage";

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
      {/* Section 1 / Page 3 */}
      <Agenda section={1} />
    </Page>
    <Page size="A4" orientation="landscape">
      <IntroductionPage />
    </Page>
    <Page size="A4" orientation="landscape">
      {/* Section 2 / Page @todo */}
      <Agenda section={2} />
    </Page>
    <Page size="A4" orientation="landscape">
      <View>
        <Canvas
          paint={(painter) => {
            // console.log("painter", painter);
            return painter
              .moveTo(100, 150)
              .lineTo(100, 250)
              .lineTo(200, 250)
              .fill("#FF3300");
          }}
        />
      </View>
    </Page>
  </Document>
);

const MyPdf = () => (
  <PDFViewer width="1200px" height="900px">
    {MyDoc}
  </PDFViewer>
); // @todo is that correct?

export default MyPdf;
