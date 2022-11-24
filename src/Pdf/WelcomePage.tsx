import React from "react";

import {
  globalStyles,
  stylesForWelcomePage,
} from "../utils/stylesForPdfComponents";
import { Image, View, Text } from "@react-pdf/renderer";

export const WelcomePage = () => {
  return (
    <>
      <View>
        <Image
          style={globalStyles.pageBackgroundFullSize}
          // used from -> https://pixabay.com/photos/boat-dock-ocean-white-morning-7588340/
          src="https://cdn.pixabay.com/photo/2022/11/13/05/45/boat-7588340_1280.jpg"
        />
        <Text
          style={[globalStyles.logoBrand, stylesForWelcomePage.welcomePageLogo]}
        >
          Some Company
        </Text>
        <Text
          style={[
            globalStyles.brandPrimaryColor,
            stylesForWelcomePage.welcomePageMainText,
          ]}
        >
          A subcontractor of a company...
        </Text>
        <Text
          style={[
            globalStyles.brandSecondaryColor,
            stylesForWelcomePage.welcomePageSecondaryText,
          ]}
        >
          Draft report
        </Text>
        <Text style={stylesForWelcomePage.welcomePageFooterLeft}>
          4 oktober 2022
        </Text>
        <Text style={stylesForWelcomePage.welcomePageFooterRight}>
          Some Company ©
        </Text>
        <Text style={stylesForWelcomePage.welcomePageBrandSidebar}>
          Some text in Sidebar
        </Text>
      </View>
    </>
  );
};
