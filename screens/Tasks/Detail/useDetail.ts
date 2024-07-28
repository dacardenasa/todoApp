import { useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

import Toast from "react-native-toast-message";

import { useForm } from "@/hooks";
import { DetailsTaskProps } from "@/interfaces";

import { TaskPayload } from "./models";
import { TaskService } from "./services";
import { Task } from "../models";
import { TaskCardProp } from "../List/models";

export const useDetail = (task: TaskCardProp) => {
  const navigation = useNavigation<DetailsTaskProps["navigation"]>();
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { form, handleChangeField, handleResetValues } = useForm<Task>({
    content: task.content ?? "",
    date: new Date(task.date) ?? new Date(),
    title: task.title ?? ""
  });

  const handleToggleModal = () => setIsModalOpen(prev => !prev);

  const shouldDisableUpdateButton = useMemo(
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

  const { isPending, mutate: updateTask } = useMutation({
    mutationFn: (payload: TaskPayload) => TaskService.update(payload),
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
          text1: `Task updated successfully`
        });
        navigation.navigate("List");
      }
    }
  });

  const { isPending: isPendingDelete, mutate: deleteTask } = useMutation({
    mutationFn: (id: string) => TaskService.delete(id),
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
          text1: `Task deleted successfully`
        });
        navigation.navigate("List");
      }
    }
  });

  const handleUpdateTask = () => {
    updateTask({ ...form, id: task.id });
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return {
    ...form,
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
  };
};
