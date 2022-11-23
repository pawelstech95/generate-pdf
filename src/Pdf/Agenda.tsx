import React, { useState } from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { globalStyles, stylesForAgendaPage } from "./stylesForPdfComponents";

const Agenda = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <View fixed={true}>
        <Image
          style={globalStyles.pageBackgroundHalfSize}
          // used from -> https://pixabay.com/photos/boat-dock-ocean-white-morning-7588340/
          src="https://cdn.pixabay.com/photo/2022/11/13/05/45/boat-7588340_1280.jpg"
        />
        <Text
          style={[
            globalStyles.brandSecondaryColor,
            stylesForAgendaPage.positionFirstText,
          ]}
        >
          1. Introduction
        </Text>
        <Text
          style={[
            globalStyles.brandSecondaryColor,
            stylesForAgendaPage.positionSecondText,
          ]}
        >
          2. Economic impact
        </Text>
        <Text
          style={[
            globalStyles.brandSecondaryColor,
            stylesForAgendaPage.positionThirdText,
          ]}
        >
          3. ESG data
        </Text>
        <Text
          style={[
            globalStyles.brandSecondaryColor,
            stylesForAgendaPage.positionFourthText,
          ]}
        >
          4. Annex: Methodology
        </Text>
      </View>
    </>
  );
};

export default Agenda;
