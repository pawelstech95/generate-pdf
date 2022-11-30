import React, { useCallback } from "react";
import { Image, View } from "@react-pdf/renderer";

export const ChartGraphPage = () => {
  const canvasFirst = useCallback(() => {
    const canvas = document.getElementById(
      "canvasGraphFirstStats"
    ) as HTMLCanvasElement;
    return canvas.toDataURL("image/jpeg", 1.0);
  }, []);

  const canvasSecond = useCallback(() => {
    const canvas = document.getElementById(
      "canvasGraphSecondStats"
    ) as HTMLCanvasElement;
    return canvas.toDataURL("image/jpeg", 1.0);
  }, []);

  return (
    <View
      fixed={true}
      style={{ position: "relative", backgroundColor: "black" }}
    >
      <Image
        src={canvasFirst}
        style={{ width: "45%", height: "50%", margin: "0 auto" }}
      />
      <Image
        src={canvasSecond}
        style={{ width: "45%", height: "50%", margin: "0 auto" }}
      />
    </View>
  );
};
