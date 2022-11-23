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

export const globalStyles = StyleSheet.create({});

export const stylesForFirstPage = StyleSheet.create({
  // global
  pageBackground: {
    position: "relative",
    minWidth: "100%",
    minHeight: "100%",
    // display: 'block',
    height: "100%",
    width: "100%",
  },
  brandPrimaryColor: {
    color: "orange",
  },
  brandSecondaryColor: {
    color: "blue",
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

export const stylesForSecondPage = StyleSheet.create({
  // global
  pageBackground: {
    position: "relative",
    minWidth: "100%",
    minHeight: "100%",
    // display: 'block',
    height: "100%",
    width: "100%",
  },
  brandPrimaryColor: {
    color: "orange",
  },
  brandSecondaryColor: {
    color: "blue",
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
