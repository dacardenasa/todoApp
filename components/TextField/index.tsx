import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type TextfieldProps = TextInputProps;

const _TextField = ({
  value,
  placeholder,
  onChangeText,
  style,
  ...rest
}: TextfieldProps) => {
  return (
    <TextInput
      style={[styles.textfield, style]}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

export const TextField = React.memo(_TextField);

const styles = StyleSheet.create({
  textfield: {
    width: "100%",
    height: 54,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "white",
    fontSize: 16
  }
});
