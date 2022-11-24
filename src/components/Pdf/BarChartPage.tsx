import React, { useCallback } from "react";
import { Image, View } from "@react-pdf/renderer";

const BarChartPage = () => {
  const test = useCallback(() => {
    const canvas = document.getElementById(
      "canvasBarChart"
    ) as HTMLCanvasElement;
    // const context = canvas.getContext("2d");

    return canvas.toDataURL("image/jpeg", 1.0);
  }, []);

  return (
    <View>
      <Image src={test} />
    </View>
  );
};

export default BarChartPage;
