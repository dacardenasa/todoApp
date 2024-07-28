import React from "react";
import { Box } from "../Box";

type SeparatorProps = {
  height: number;
};

const _Separator = ({ height }: SeparatorProps) => {
  return <Box style={{ height, backgroundColor: "transparent" }} />;
};

export const Separator = React.memo(_Separator);
