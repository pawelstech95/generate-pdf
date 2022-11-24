import React, { useCallback } from "react";
import { Page, PDFViewer, Document, View, Image } from "@react-pdf/renderer";

import { WelcomePage } from "./WelcomePage";
import Agenda from "./Agenda";
import IntroductionPage from "./IntroductionPage";

const Test = () => {
  const test = useCallback(() => {
    const canvas = document.getElementById(
      "canvasBarChart"
    ) as HTMLCanvasElement;
    // const context = canvas.getContext("2d");

    return canvas.toDataURL("image/jpeg", 1.0);
  }, []);

  return (
    <View>
      <Image src={test} />
    </View>
  );
};

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
      <Test />
    </Page>
  </Document>
);

const MyPdf = () => (
  <PDFViewer width="1200px" height="900px">
    {MyDoc}
  </PDFViewer>
); // @todo is that correct?

export default MyPdf;
