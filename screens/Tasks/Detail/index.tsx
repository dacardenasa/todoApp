import React from "react";
import { Platform, StyleSheet } from "react-native";

import {
  Box,
  Button,
  Container,
  CustomDateTimePicker,
  CustomModal,
  Separator,
  TextField,
  Typography,
} from "@/components";
import { useDetail } from "./useDetail";
import { colors } from "@/constants/colors";

import { DetailsTaskProps } from "@/interfaces";

export const Detail = ({ route }: DetailsTaskProps) => {
  const {
    content,
    datePickerError,
    date,
    title,
    isModalOpen,
    isPending,
    isPendingDelete,
    shouldDisableUpdateButton,
    handleChangeDate,
    handleChangeField,
    handleDatePickerError,
    handleDeleteTask,
    handleToggleModal,
    handleUpdateTask,
    handleResetValues,
  } = useDetail(route.params);

  return (
    <Container style={styles.container}>
      <Box style={styles.formBox}>
        <Typography type="title" style={styles.titleLabel}>
          Your task
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
            shouldDisableUpdateButton || isPending || Boolean(datePickerError)
          }
          label="Update task"
          handleOnPress={handleUpdateTask}
        />
        <Button
          isDisabled={isPending || isPendingDelete}
          label="Delete task"
          handleOnPress={handleToggleModal}
        />
        <Button
          isDisabled={isPending || isPendingDelete}
          label="Reset form"
          handleOnPress={handleResetValues}
        />
      </Box>
      <CustomModal isModalOpen={isModalOpen} closeModal={handleToggleModal}>
        <Box style={styles.modalContentBox}>
          <Typography type="subtitle">
            ¿Are you sure to delete this record?
          </Typography>
          <Box style={styles.modalButtonsBox}>
            <Button
              label="Confirm"
              handleOnPress={handleDeleteTask}
              style={{ width: "48%" }}
            />
            <Button
              label="Cancel"
              handleOnPress={handleToggleModal}
              style={{ width: "48%" }}
            />
          </Box>
        </Box>
      </CustomModal>
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
  modalContentBox: {
    borderRadius: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    rowGap: 16,
  },
  modalButtonsBox: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
