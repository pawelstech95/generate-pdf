import React from "react";
import { usePDF } from "@react-pdf/renderer";

import { MyDoc } from "./MyPdf";

export const DownloadPdf = () => {
  const [instance] = usePDF({ document: MyDoc });

  if (instance.loading) return <div>Loading ...</div>;
  if (instance.error) return <div>Something went wrong: {instance.error}</div>;

  return (
    <a href={instance.url!} download="test.pdf">
      Download
    </a>
  );
};
