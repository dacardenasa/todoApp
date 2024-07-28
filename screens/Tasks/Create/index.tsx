import React from "react";
import { StyleSheet } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import {
  Box,
  Button,
  Container,
  TextButton,
  TextField,
  Typography
} from "@/components";
import { colors } from "@/constants/colors";
import { formatDate } from "@/utils";

import { useCreateTask } from "./useCreateTask";

export const Create = () => {
  const {
    content,
    date,
    title,
    isOpenDatePicker,
    isPending,
    shouldDisabledCreateButton,
    handleChangeDate,
    handleChangeField,
    handleCreateTask,
    handleResetValues,
    handleShowDatepicker
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
        <TextButton
          labelStyle={styles.customTextButton}
          label={formatDate(date)}
          handleOnPress={handleShowDatepicker}
        />
        {isOpenDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(date)}
            mode="date"
            is24Hour={true}
            onChange={handleChangeDate}
            minimumDate={new Date()}
          />
        )}
      </Box>
      <Box style={styles.buttonsBox}>
        <Button
          isDisabled={shouldDisabledCreateButton || isPending}
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
    position: "relative"
  },
  formBox: {
    width: "100%",
    rowGap: 16
  },
  titleLabel: {
    color: colors.low,
    textAlign: "center"
  },
  customTextButton: {
    width: "100%",
    height: 54,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "white",
    fontSize: 16,
    color: colors.low,
    textAlign: "left"
  },
  buttonsBox: {
    width: "100%",
    position: "absolute",
    bottom: 48,
    left: 16,
    rowGap: 16
  }
});
