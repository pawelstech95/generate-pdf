import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import {
  globalStyles,
  stylesForAgendaPage,
} from "../../utils/stylesForPdfComponents";

interface Props {
  section: 0 | 1 | 2 | 3 | 4;
}

const Agenda = ({ section }: Props) => {
  //@todo use switch / case
  return (
    <View>
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
        {section === 1 ? (
          <Text style={{ color: "red" }}>1. Introduction</Text>
        ) : (
          <Text>1. Introduction</Text>
        )}
      </Text>
      <Text
        style={[
          globalStyles.brandSecondaryColor,
          stylesForAgendaPage.positionSecondText,
        ]}
      >
        {section === 2 ? (
          <Text style={{ color: "red" }}>2. Sample charts</Text>
        ) : (
          <Text>2. Sample charts</Text>
        )}
      </Text>
      <Text
        style={[
          globalStyles.brandSecondaryColor,
          stylesForAgendaPage.positionThirdText,
        ]}
      >
        {section === 3 ? (
          <Text style={{ color: "red" }}>3. Fonts</Text>
        ) : (
          <Text>3. Fonts</Text>
        )}
      </Text>
      <Text
        style={[
          globalStyles.brandSecondaryColor,
          stylesForAgendaPage.positionFourthText,
        ]}
      >
        {section === 4 ? (
          <Text style={{ color: "red" }}>4. Other charts</Text>
        ) : (
          <Text>4. Other charts</Text>
        )}
      </Text>
    </View>
  );
};

export default Agenda;
