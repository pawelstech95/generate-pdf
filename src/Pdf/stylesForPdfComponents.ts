import { StyleSheet } from "@react-pdf/renderer";
// @todo use cssModules
// @todo css are written in an ugly way to save time
//
// Font.register({
//   family: "Satisfy",
//   src: "https://fonts.googleapis.com/css2?family=Satisfy&display=swap",
//   fontStyle: "normal",
//   fontWeight: "normal",
//   fonts: [],
// });

export const globalStyles = StyleSheet.create({
  pageBackgroundFullSize: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  pageBackgroundHalfSize: {
    position: "relative",
    backgroundSize: "cover",
    width: "50%",
    height: "100%",
  },
  brandPrimaryColor: {
    color: "rgba(248,187,118,0.53)",
  },
  brandSecondaryColor: {
    color: "rgba(29, 121, 161, 0.53)",
  },
  brandThirdColor: {
    color: "rgba(226,23,94,0.53)",
  },
  brandFourthColor: {
    color: "rgb(255,255,255)",
  },
  blackColor: {
    color: "rgb(7,7,7)",
  },
  backgroundSecondaryColor: {
    position: "relative", // ?
    backgroundColor: "rgba(29, 121, 161, 0.53)",
    width: "50%",
    height: "100%",
  },
  logoBrand: {
    fontFamily: "Times-Bold",
    fontSize: "36px",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  boldFontSize: {
    fontFamily: "Times-Bold",
  },
});

export const stylesForFirstPage = StyleSheet.create({
  firstPageLogo: {
    position: "absolute",
    right: "30px",
    top: "30px",
    color: "red",
  },
  firstPageMainText: {
    position: "absolute",
    width: "300px",
    left: "30%",
    top: "35%",
    fontSize: "42px",
  },
  firstPageSecondaryText: {
    position: "absolute",
    width: "150px",
    left: "30%",
    top: "55%",
    fontSize: "24px",
  },
  firstPageFooterLeft: {
    position: "absolute",
    left: "10%",
    bottom: "5%",
    fontSize: "12px",
    color: "white",
  },
  firstPageFooterRight: {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    fontSize: "12px",
    color: "white",
  },
  firstPageBrandSidebar: {
    position: "absolute",
    bottom: "50%",
    right: "47.5%",
    paddingTop: "2%",
    paddingLeft: "15%",
    width: "100%",
    height: "8%",
    color: "white",
    backgroundColor: "orange",
    transform: "rotate(-90deg)",
  },
});

export const stylesForAgendaPage = StyleSheet.create({
  positionFirstText: {
    position: "absolute",
    left: "65%",
    top: "30%",
  },
  positionSecondText: {
    position: "absolute",
    left: "65%",
    top: "40%",
  },
  positionThirdText: {
    position: "absolute",
    left: "65%",
    top: "50%",
  },
  positionFourthText: {
    position: "absolute",
    left: "65%",
    top: "60%",
  },
});

export const stylesForFourthPage = StyleSheet.create({
  positionFirstText: {
    position: "absolute",
    left: "10%",
    top: "30%",
    width: "30%",
    fontSize: "32px",
  },
  positionSecondText: {
    position: "absolute",
    left: "55%",
    top: "10%",
    fontSize: "32px",
  },
  positionThirdText: {
    position: "absolute",
    left: "55%",
    top: "25%",
    width: "40%",
    fontSize: "16px",
  },
  positionFourthText: {
    position: "absolute",
    left: "55%",
    top: "40%",
    width: "40%",
    fontSize: "16px",
  },
  positionFifthText: {
    position: "absolute",
    left: "55%",
    top: "60%",
    width: "40%",
    fontSize: "16px",
  },
  positionSixthText: {
    position: "absolute",
    left: "57%",
    top: "75%",
    width: "35%",
    fontSize: "12px",
  },

  positionSeventhText: {
    position: "absolute",
    left: "57%",
    top: "80%",
    width: "35%",
    fontSize: "12px",
  },
});
