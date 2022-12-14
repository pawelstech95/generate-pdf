import React, { useCallback } from "react";
import { Image, View, Text } from "@react-pdf/renderer";

import { globalStyles } from "../../utils/stylesForPdfComponents";
import { data } from "../BarChart";

export const BarChartPage = () => {
  const canvasConverter = useCallback(() => {
    const canvas = document.getElementById(
      "canvasBarChart"
    ) as HTMLCanvasElement;
    // const context = canvas.getContext("2d");

    return canvas.toDataURL("image/jpeg", 1.0);
  }, []);

  const printStatistic = data.datasets[0].data.map((example, index) => {
    return (
      <Text
        style={[
          globalStyles.brandSecondaryColor,
          globalStyles.boldFontSize,
          { paddingBottom: "15px", textAlign: "center" },
        ]}
        key={example}
      >
        Example {String(index + 1)}:{" "}
        <Text style={globalStyles.brandThirdColor}>Value: {example}</Text>
      </Text>
    );
  });

  return (
    <View
      fixed={true}
      style={{ position: "relative", backgroundColor: "black" }}
    >
      <Image
        src={canvasConverter}
        style={{ width: "55%", height: "40%", margin: "5% auto" }}
      />
      <View
        style={{
          width: "50%",
          height: "50%",
          margin: "5% auto",
        }}
      >
        {printStatistic}
      </View>
    </View>
  );
};
