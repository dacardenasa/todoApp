import React from "react";
import { ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box } from "../Box";

type ContainerProps = {
  children: React.ReactNode;
  style: ViewStyle;
};

export const Container = ({ children, style = {} }: ContainerProps) => {
  const { top } = useSafeAreaInsets();
  return <Box style={{ ...style, top }}>{children}</Box>;
};
