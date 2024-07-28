import React from "react";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps;

function _Box({ style, ...otherProps }: ThemedViewProps) {
  return <View style={[style]} {...otherProps} />;
}

export const Box = React.memo(_Box);
