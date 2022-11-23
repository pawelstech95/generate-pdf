import React from "react";

import { stylesForPdfComponents } from "./stylesForPdfComponents";
import { Image,  View, Text } from "@react-pdf/renderer";
//
// export const htmlFirstPage = `
// <div class="wrapper">
//     <div class="logo" style={stylesForPdfComponents.logoFont}>Come Company</div>
// <!--    <aside class="brand-sidebar">A subcontractor of a company</aside>-->
// <!--    <h3 class="welcome-page-content">The Some Company System’s 2021 impact in Argentina</h3>-->
// <!--    <h4 class="draft-report">Draft report</h4>-->
// <!--    <footer class="footer-container"><span class="footer-inner-content">4 oktober 2022 </span> <span class="footer-inner-content">Some Company ©</span></footer>-->
// <!--    <div class="welcome-page-gradient" />-->
//  </div>
//
// `;

export const FirstPdfPage = () => {
    return (
        <>
            <View fixed={true}>
                <Image
                    style={stylesForPdfComponents.pageBackground}
                    src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                />
            </View>
            <View>
                <Text style={stylesForPdfComponents.logoBrand}>Some Company</Text>
            </View>
            {/*<FirstPdfPage />*/}
        </>
    );
};

