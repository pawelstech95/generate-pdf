import React from "react";
import { Text, Link, View, Svg, Circle } from "@react-pdf/renderer";
import {
  globalStyles,
  stylesForFooterPage,
} from "../../utils/stylesForPdfComponents";

export const FooterPage = () => {
  return (
    <View fixed={true} style={{ position: "relative" }}>
      <Svg
        style={[
          globalStyles.backgroundSecondaryColor,
          globalStyles.pageBackgroundFullSize,
        ]}
      />
      <View
        style={[
          globalStyles.brandFourthColor,
          stylesForFooterPage.logoSomeCompany,
        ]}
      >
        <Text>
          random<Text style={globalStyles.brandPrimaryColor}>Text</Text>{" "}
          <Text>in</Text>{" "}
          <Text style={globalStyles.brandThirdColor}>Footer</Text>
        </Text>
        <Link
          src="https://www.google.com/"
          style={{ textDecoration: "none", fontSize: "16px", color: "gray" }}
        >
          <Text>Visit us! - Click here</Text>
        </Link>
        {/*@ts-ignore*/}
        <Svg viewBox="0 0 100 100" style={{ right: "-400px", top: "-115px" }}>
          <Circle cx="10" cy="10" r="4" fill="tomato" stroke="orange" />
        </Svg>
        {/*Contact*/}
        <View style={{ position: "absolute", fontSize: "16px", bottom: "60%" }}>
          <Text>Lorem Ipsum 1-II</Text>
          <Text> 1012 TB SomeCity, the Netherlands</Text>
          <Text style={{ marginBottom: "25px" }}>Tel: +31.(0) .222.1111</Text>
          <Text>www.somecompany.com </Text>
          <Text>info@somecompany.com</Text>
        </View>
        {/*  Social Media */}
        {/*Contact*/}
        <View
          style={{
            position: "absolute",
            fontSize: "16px",
            bottom: "65%",
            left: "75%",
          }}
        >
          <Text style={[globalStyles.blackColor, { marginBottom: "15px" }]}>
            Follow Us{" "}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Link
              style={{
                marginRight: "5px",
                textDecoration: "none",
                color: "gray",
              }}
              src="https://twitter.com/"
            >
              <Text>Twitter</Text>
            </Link>
            <Link
              style={{
                marginRight: "5px",
                textDecoration: "none",
                color: "gray",
              }}
              src="https://www.facebook.com/"
            >
              <Text>Facebook</Text>
            </Link>
            <Link
              style={{
                marginRight: "5px",
                textDecoration: "none",
                color: "gray",
              }}
              src="https://www.instagram.com/"
            >
              <Text> Instagram</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};
