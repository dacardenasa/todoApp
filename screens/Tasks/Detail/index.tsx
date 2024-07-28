import React from "react";
import { StyleSheet } from "react-native";

import {
  Box,
  Button,
  Container,
  CustomModal,
  TextButton,
  TextField,
  Typography
} from "@/components";
import { useDetail } from "./useDetail";
import { colors } from "@/constants/colors";

import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "@/utils";
import { DetailsTaskProps } from "@/interfaces";

export const Detail = ({ route }: DetailsTaskProps) => {
  const {
    content,
    date,
    title,
    isModalOpen,
    isOpenDatePicker,
    isPending,
    isPendingDelete,
    shouldDisableUpdateButton,
    handleChangeDate,
    handleChangeField,
    handleDeleteTask,
    handleToggleModal,
    handleUpdateTask,
    handleResetValues,
    handleShowDatepicker
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
          isDisabled={shouldDisableUpdateButton || isPending}
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
      <CustomModal
        isModalOpen={isModalOpen}
        closeModal={handleToggleModal}
      >
        <Box style={styles.modalContentBox}>
          <Typography type="subtitle">¿Are you sure to delete this record?</Typography>
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
  },
  modalContentBox: {
    borderRadius: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    rowGap: 16
  },
  modalButtonsBox: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
