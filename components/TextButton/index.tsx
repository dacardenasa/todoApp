import React from "react";
import { Pressable, StyleSheet, TextStyle } from "react-native";
import { Typography } from "../Typography";

type TextButtonProps = {
  labelStyle?: TextStyle;
  handleOnPress: () => void;
  label: string;
  isDisabled?: boolean;
};

const _TextButton = ({
  label,
  labelStyle = {},
  handleOnPress,
  isDisabled = false
}: TextButtonProps) => {
  return (
    <Pressable disabled={isDisabled} onPress={handleOnPress}>
      <Typography style={{ ...styles.label, ...labelStyle }}>
        {label}
      </Typography>
    </Pressable>
  );
};

export const TextButton = React.memo(_TextButton);

const styles = StyleSheet.create({
  label: {
    color: "white",
    textAlign: "right"
  }
});
