import React, { useCallback } from "react";
import { Image, View, Text } from "@react-pdf/renderer";
import { globalStyles } from "../../utils/stylesForPdfComponents";
import { data } from "../BarChart";

const BarChartPage = () => {
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
          { paddingBottom: "15px" },
        ]}
        key={example}
      >
        Example {String(index + 1)}:{" "}
        <Text style={globalStyles.brandThirdColor}>Value: {example}</Text>
      </Text>
    );
  });

  return (
    <View fixed={true}>
      <Image src={canvasConverter} />
      {printStatistic}
    </View>
  );
};

export default BarChartPage;
