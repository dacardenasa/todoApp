import React from "react";
import { Box } from "../Box";

type SeparatorProps = {
  height: number;
};

export const Separator = ({ height }: SeparatorProps) => {
  return <Box style={{ height, backgroundColor: "transparent" }} />;
};
