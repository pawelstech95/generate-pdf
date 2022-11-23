import React from "react";
import {
    Page,
    Text,
    PDFViewer,
    Document,
    Font,
} from "@react-pdf/renderer";

const MyPdf = () => {
    return (

            <PDFViewer width="1200px" height="900px">
                <Document>
                    <Page
                        size="A4"
                        orientation="landscape"
                        // style={stylesForPdfComponents.page}
                    >
                      <Text>sss</Text>
                    </Page>
                </Document>
            </PDFViewer>
    );
};

export default MyPdf;