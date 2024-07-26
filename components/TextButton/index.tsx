import React from "react";
import { Pressable, StyleSheet, TextStyle } from "react-native";
import { Typography } from "../Typography";

type TextButtonProps = {
  labelStyle?: TextStyle;
  handleOnPress: () => void;
  label: string;
};

export const TextButton = ({
  label,
  labelStyle = {},
  handleOnPress
}: TextButtonProps) => {
  return (
    <Pressable onPress={handleOnPress}>
      <Typography style={{ ...styles.label, ...labelStyle }}>
        {label}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    textAlign: "right"
  }
});
