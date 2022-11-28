import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import {
  globalStyles,
  stylesForPageWitchFonts,
} from "../../utils/stylesForPdfComponents";

export const PageWithFonts = () => {
  return (
    <View
      fixed={true}
      style={[globalStyles.brandSecondaryColor, { position: "relative" }]}
    >
      <Image
        style={globalStyles.pageBackgroundHalfSize}
        // used from -> https://pixabay.com/photos/boat-dock-ocean-white-morning-7588340/
        src="https://cdn.pixabay.com/photo/2022/11/13/05/45/boat-7588340_1280.jpg"
      />
      <View
        style={[
          {
            position: "absolute",
            left: "60%",
            top: "20%",
            width: "30%",
            flexDirection: "column",
          },
        ]}
      >
        <Text style={{ marginBottom: "25px", fontFamily: "Satisfy" }}>
          The first line of Lorem Ipsum
        </Text>
        <Text style={{ marginBottom: "25px", fontFamily: "Courier" }}>
          The first line of Lorem Ipsum
        </Text>
        <Text
          style={{
            marginBottom: "25px",
            fontFamily: "Ubuntu",
            fontWeight: "normal",

            fontStyle: "italic",
          }}
        >
          The first line of Lorem Ipsum
        </Text>
        <Text
          style={{
            marginBottom: "25px",
            fontFamily: "Helvetica-Oblique",
          }}
        >
          The first line of Lorem Ipsum
        </Text>
        <Text style={{ marginBottom: "25px", fontFamily: "Nerko One" }}>
          The first line of Lorem Ipsum
        </Text>
        <Text style={{ marginBottom: "25px", fontFamily: "Noto Sans JP" }}>
          人類社会のすべての構成員
        </Text>
        <Text style={{ marginBottom: "25px", fontFamily: "Rubik Distressed" }}>
          The first line of Lorem Ipsum
        </Text>
        <View style={stylesForPageWitchFonts.containerForEmoji}>
          <Text style={stylesForPageWitchFonts.textEmoji}>😀💩👻🙈</Text>
        </View>
      </View>
    </View>
  );
};
