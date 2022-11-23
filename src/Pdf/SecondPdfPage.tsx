import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { stylesForSecondPage } from "./stylesForPdfComponents";

const SecondPdfPage = () => {
  return (
    <>
      <View fixed={true}>
        <Image
          style={stylesForSecondPage.pageBackground}
          // used from -> https://pixabay.com/photos/boat-dock-ocean-white-morning-7588340/
          src="https://cdn.pixabay.com/photo/2022/11/13/05/45/boat-7588340_1280.jpg"
        />
        <Text
          style={[
            stylesForSecondPage.logoBrand,
            stylesForSecondPage.firstPageLogo,
          ]}
        >
          Some Company
        </Text>
        <Text
          style={[
            stylesForSecondPage.brandPrimaryColor,
            stylesForSecondPage.firstPageMainText,
          ]}
        >
          A subcontractor of a company...
        </Text>
        <Text
          style={[
            stylesForSecondPage.brandSecondaryColor,
            stylesForSecondPage.firstPageSecondaryText,
          ]}
        >
          Draft report
        </Text>
        <Text style={stylesForSecondPage.firstPageFooterLeft}>
          4 oktober 2022
        </Text>
        <Text style={stylesForSecondPage.firstPageFooterRight}>
          Some Company ©
        </Text>
        <Text style={stylesForSecondPage.firstPageBrandSidebar}>
          Some text in Sidebar
        </Text>
      </View>
    </>
  );
};

export default SecondPdfPage;
