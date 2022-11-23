import { Font, StyleSheet } from "@react-pdf/renderer";
// @todo use cssModules
//
// Font.register({
//   family: "Satisfy",
//   src: "https://fonts.googleapis.com/css2?family=Satisfy&display=swap",
//   fontStyle: "normal",
//   fontWeight: "normal",
//   fonts: [],
// });

export const stylesForPdfComponents = StyleSheet.create({
  // global
  pageBackground: {
    position: "relative",
    minWidth: "100%",
    minHeight: "100%",
    // display: 'block',
    height: "100%",
    width: "100%",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  // logo first page
  logoBrand: {
    fontFamily: "Times-Bold",
    fontSize: "36px",
  },
  logoFirstPage: {
    position: "absolute",
    right: "30px",
    top: "30px",
    color: "red",
  },
});
