import React from "react";
import { Platform, StyleSheet } from "react-native";

import {
  Box,
  Button,
  Container,
  CustomDateTimePicker,
  Separator,
  TextField,
  Typography,
} from "@/components";
import { colors } from "@/constants/colors";

import { useCreateTask } from "./useCreateTask";

export const Create = () => {
  const {
    content,
    date,
    datePickerError,
    title,
    isPending,
    shouldDisabledCreateButton,
    handleChangeDate,
    handleChangeField,
    handleCreateTask,
    handleDatePickerError,
    handleResetValues,
  } = useCreateTask();

  return (
    <Container style={styles.container}>
      <Box style={styles.formBox}>
        <Typography type="title" style={styles.titleLabel}>
          Your new task
        </Typography>
        <TextField
          value={title}
          placeholder="Title"
          onChangeText={(value) => handleChangeField("title", value)}
        />
        <TextField
          value={content}
          placeholder="Content"
          onChangeText={(value) => handleChangeField("content", value)}
          multiline={true}
          numberOfLines={2}
          style={{ height: 100 }}
        />
        {Platform.OS !== "web" && <Separator height={16} />}
        <CustomDateTimePicker
          label="Limit Date"
          value={date}
          onChange={handleChangeDate}
          minimumDate={new Date()}
          error={datePickerError}
          handleDatePickerError={handleDatePickerError}
        />
      </Box>
      <Box
        style={[
          styles.buttonsBox,
          Platform.OS === "ios"
            ? styles.defaultButtonBoxIOSPosition
            : styles.defaultButtonBoxPosition,
        ]}
      >
        <Button
          isDisabled={
            shouldDisabledCreateButton || isPending || Boolean(datePickerError)
          }
          label="Create task"
          handleOnPress={handleCreateTask}
        />
        <Button
          isDisabled={isPending}
          label="Reset form"
          handleOnPress={handleResetValues}
        />
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    position: "relative",
  },
  formBox: {
    width: "100%",
    rowGap: 16,
  },
  titleLabel: {
    color: colors.low,
    textAlign: "center",
  },
  customTextButton: {
    width: "100%",
    height: 54,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "white",
    fontSize: 16,
    color: colors.low,
    textAlign: "left",
  },
  buttonsBox: {
    width: "100%",
    position: "absolute",
    left: 16,
    rowGap: 16,
  },
  defaultButtonBoxPosition: {
    bottom: 48,
  },
  defaultButtonBoxIOSPosition: {
    bottom: 96,
  },
});
