import React from "react";
import {
  ActivityIndicator,
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
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const Button = ({
  style = {},
  label,
  labelStyle = {},
  handleOnPress,
  isDisabled = false,
  isLoading = false
}: ButtonsProps) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      disabled={isDisabled}
      style={{
        ...styles.buttonBox,
        ...style,
        ...(isDisabled ? styles.disabled : {})
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFDB00" />
      ) : (
        <Typography
          type="defaultSemiBold"
          style={{ ...styles.label, ...labelStyle }}
        >
          {label}
        </Typography>
      )}
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
  },
  disabled: {
    backgroundColor: "gray"
  }
});
