import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from "react-native";
import { Typography } from "../Typography";

type ButtonsProps = {
  style?: ViewStyle;
  labelStyle?: TextStyle;
  label: string;
  handleOnPress: () => void;
};

export const Button = ({
  style = {},
  label,
  labelStyle = {},
  handleOnPress
}: ButtonsProps) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{ ...styles.buttonBox, ...style }}
    >
      <Typography
        type="defaultSemiBold"
        style={{ ...styles.label, ...labelStyle }}
      >
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#FFDB00"
  },
  label: {
    color: "#26355D"
  }
});
