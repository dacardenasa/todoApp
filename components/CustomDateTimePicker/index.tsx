import { colors } from "@/constants/colors";
import React from "react";
import { DatePickerInput } from "react-native-paper-dates";

import { en, registerTranslation } from "react-native-paper-dates";
import { Typography } from "../Typography";
import { Platform, StyleSheet } from "react-native";

registerTranslation("en", en);

type CustomDateTimePickerProps = {
  label: string;
  value: Date;
  minimumDate: Date;
  error: string | null;
  onChange: (selectedDate: Date | undefined) => void;
  handleDatePickerError: (error: string | null) => void;
};

const _CustomDateTimePicker = ({
  error,
  label,
  value,
  minimumDate,
  handleDatePickerError,
  onChange
}: CustomDateTimePickerProps) => {
  return (
    <>
      <DatePickerInput
        locale="en"
        label={label}
        value={value}
        onChange={onChange}
        inputMode="start"
        iconColor={colors.low}
        validRange={{ startDate: minimumDate, endDate: new Date(2050, 1, 1) }}
        onValidationError={handleDatePickerError}
      />
      {Platform.OS !== "web" && error && (
        <Typography style={styles.errorLabel}>{error}</Typography>
      )}
    </>
  );
};

export const CustomDateTimePicker = React.memo(_CustomDateTimePicker);

const styles = StyleSheet.create({
  errorLabel: {
    color: "red",
    marginTop: 16
  }
});
