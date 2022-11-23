import React from "react";

import { stylesForFirstPage } from "./stylesForPdfComponents";
import { Image, View, Text } from "@react-pdf/renderer";

export const FirstPdfPage = () => {
  return (
    <>
      <View fixed={true}>
        <Image
          style={stylesForFirstPage.pageBackground}
          // used from -> https://pixabay.com/photos/boat-dock-ocean-white-morning-7588340/
          src="https://cdn.pixabay.com/photo/2022/11/13/05/45/boat-7588340_1280.jpg"
        />
        <Text
          style={[
            stylesForFirstPage.logoBrand,
            stylesForFirstPage.firstPageLogo,
          ]}
        >
          Some Company
        </Text>
        <Text
          style={[
            stylesForFirstPage.brandPrimaryColor,
            stylesForFirstPage.firstPageMainText,
          ]}
        >
          A subcontractor of a company...
        </Text>
        <Text
          style={[
            stylesForFirstPage.brandSecondaryColor,
            stylesForFirstPage.firstPageSecondaryText,
          ]}
        >
          Draft report
        </Text>
        <Text style={stylesForFirstPage.firstPageFooterLeft}>
          4 oktober 2022
        </Text>
        <Text style={stylesForFirstPage.firstPageFooterRight}>
          Some Company ©
        </Text>
        <Text style={stylesForFirstPage.firstPageBrandSidebar}>
          Some text in Sidebar
        </Text>
      </View>
    </>
  );
};
