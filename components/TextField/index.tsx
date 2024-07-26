import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type TextfieldProps = TextInputProps;

export const TextField = ({
  value,
  placeholder,
  onChangeText,
  ...rest
}: TextfieldProps) => {
  return (
    <TextInput
      style={styles.textfield}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

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
