import { useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

import Toast from "react-native-toast-message";

import { useForm } from "@/hooks";
import { CreateTaskProps } from "@/interfaces";

import { TaskService } from "./services";
import { Task } from "../models";

export const useCreateTask = () => {
  const navigation = useNavigation<CreateTaskProps["navigation"]>();
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const { form, handleChangeField, handleResetValues } = useForm<Task>({
    content: "",
    date: new Date(),
    title: ""
  });

  const shouldDisabledCreateButton = useMemo(
    () => Object.values(form).some((value) => !String(value).length),
    [form]
  );

  const handleShowDatepicker = () => {
    setIsOpenDatePicker(true);
  };

  const handleChangeDate = (
    _: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate;
    setIsOpenDatePicker(false);
    handleChangeField("date", currentDate ?? new Date());
  };

  const { isPending, mutate: createTask } = useMutation({
    mutationFn: (payload: Task) => TaskService.create(payload),
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: error.message
      });
    },
    onSuccess: async (data) => {
      if (data) {
        Toast.show({
          type: "success",
          text1: `Task created successfully`
        });
        navigation.navigate("List");
      }
    }
  });

  const handleCreateTask = () => {
    createTask(form);
  };

  return {
    ...form,
    isOpenDatePicker,
    isPending,
    shouldDisabledCreateButton,
    handleChangeDate,
    handleChangeField,
    handleCreateTask,
    handleResetValues,
    handleShowDatepicker
  };
};
