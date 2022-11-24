import React from "react";
import { Text, View, Svg } from "@react-pdf/renderer";
import {
  globalStyles,
  stylesForIntroductionPage,
} from "./stylesForPdfComponents";

const IntroductionPage = () => {
  return (
    <>
      <View>
        <Svg style={globalStyles.backgroundSecondaryColor} />
        <Text
          style={[
            globalStyles.brandFourthColor,
            stylesForIntroductionPage.positionFirstText,
          ]}
        >
          This study reports on the 2021 impact of the Some Company System in
          Argentina
        </Text>
        <Text
          style={[
            globalStyles.brandSecondaryColor,
            stylesForIntroductionPage.positionSecondText,
          ]}
        >
          Introduction
        </Text>
        <Text
          style={[
            globalStyles.blackColor,
            stylesForIntroductionPage.positionThirdText,
          ]}
        >
          <Text style={globalStyles.boldFontSize}>Lorem Ipsum </Text>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the{" "}
          <Text style={globalStyles.boldFontSize}>industry's</Text> standard
          dummy text ever since the{" "}
          <Text style={globalStyles.boldFontSize}>1500s</Text>.
        </Text>
        <Text
          style={[
            globalStyles.blackColor,
            stylesForIntroductionPage.positionFourthText,
          ]}
        >
          <Text style={globalStyles.boldFontSize}>Lorem Ipsum </Text>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
        <Text
          style={[
            globalStyles.blackColor,
            stylesForIntroductionPage.positionFifthText,
          ]}
        >
          <Text style={globalStyles.boldFontSize}>Lorem Ipsum </Text>
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        </Text>
        <Text
          style={[
            globalStyles.blackColor,
            stylesForIntroductionPage.positionSixthText,
          ]}
        >
          <Text style={{ color: "rgba(226,23,94,0.53)" }}>•</Text> This book is
          a treatise on the theory of ethics, very popular during the
          Renaissance.
        </Text>
        <Text
          style={[
            globalStyles.blackColor,
            stylesForIntroductionPage.positionSeventhText,
          ]}
        >
          <Text style={{ color: "rgba(226,23,94,0.53)" }}>•</Text> The first
          line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
          in section 1.10.32.
        </Text>
      </View>
    </>
  );
};

export default IntroductionPage;
