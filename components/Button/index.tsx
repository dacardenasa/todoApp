import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  TextStyle,
  ViewStyle
} from "react-native";

import { colors } from "@/constants/colors";

import { Typography } from "../Typography";

type ButtonsProps = {
  style?: ViewStyle;
  labelStyle?: TextStyle;
  label: string;
  handleOnPress: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};

const _Button = ({
  style = {},
  label,
  labelStyle = {},
  handleOnPress,
  isDisabled = false,
  isLoading = false
}: ButtonsProps) => {
  return (
    <Pressable
      onPress={handleOnPress}
      disabled={isDisabled}
      style={{
        ...styles.buttonBox,
        ...style,
        ...(isDisabled ? styles.disabled : {})
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.hight} />
      ) : (
        <Typography
          type="defaultSemiBold"
          style={{ ...styles.label, ...labelStyle }}
        >
          {label}
        </Typography>
      )}
    </Pressable>
  );
};

export const Button = React.memo(_Button);

const styles = StyleSheet.create({
  buttonBox: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: colors.middle
  },
  label: {
    color: colors.low
  },
  disabled: {
    backgroundColor: "gray"
  }
});
