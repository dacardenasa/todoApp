import { useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { useMutation } from "@tanstack/react-query";

import Toast from "react-native-toast-message";

import { useForm } from "@/hooks";
import { CreateTaskProps } from "@/interfaces";

import { TaskService } from "./services";
import { Task } from "../models";

export const useCreateTask = () => {
  const navigation = useNavigation<CreateTaskProps["navigation"]>();
  const [datePickerError, setDatePickerError] = useState<string | null>(null);
  const { form, handleChangeField, handleResetValues } = useForm<Task>({
    content: "",
    date: new Date(),
    title: "",
  });

  const handleDatePickerError = (error: string | null) =>
    setDatePickerError(error);

  const shouldDisabledCreateButton = useMemo(
    () => Object.values(form).some((value) => !String(value).length),
    [form],
  );

  const handleChangeDate = (selectedDate: Date | undefined) => {
    handleChangeField("date", selectedDate ?? new Date());
  };

  const { isPending, mutate: createTask } = useMutation({
    mutationFn: (payload: Task) => TaskService.create(payload),
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: error.message,
      });
    },
    onSuccess: async (data) => {
      if (data) {
        Toast.show({
          type: "success",
          text1: `Task created successfully`,
        });
        navigation.navigate("List");
      }
    },
  });

  const handleCreateTask = () => {
    createTask(form);
  };

  return {
    ...form,
    datePickerError,
    isPending,
    shouldDisabledCreateButton,
    handleChangeDate,
    handleChangeField,
    handleCreateTask,
    handleDatePickerError,
    handleResetValues,
  };
};
