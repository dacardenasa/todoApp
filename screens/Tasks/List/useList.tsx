import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState
} from "react";
import { useNavigation } from "expo-router";

import { useQuery } from "@tanstack/react-query";

import { UserContext } from "@/state";
import { useRefetchOnFocus } from "@/hooks";
import { ListTasksProps } from "@/interfaces";

import { TaskService } from "./services";
import { apiToTask } from "./adapters/apiToTask";
import { TaskCardProp, TaskMapped } from "./models";
import { TaskCard } from "./components/TaskCard";
import { HeaderRightBox } from "./components/HeaderRightBox";


export const useList = () => {
  const navigation = useNavigation<ListTasksProps["navigation"]>();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { logout } = useContext(UserContext);
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: TaskService.getAll,
    select: (tasks) => {
      const tasksMapped = apiToTask(tasks);
      return tasksMapped;
    },
    enabled: false
  });

  const goToTaskDetails = (item: TaskCardProp) => {
    navigation.navigate("Detail", {
      content: item.content,
      date: item.date,
      id: item.id,
      title: item.title
    });
  };

  const toggleLogoutModal = () => setIsLogoutModalOpen((prev) => !prev);

  const renderFlatlistItem = ({ item }: { item: TaskMapped }) => {
    return (
      <TaskCard {...item} handleOnPressCard={() => goToTaskDetails(item)} />
    );
  };

  const renderHeaderRight = useCallback(
    () => (
      <HeaderRightBox
        toggleModal={toggleLogoutModal}
        handleGoCreate={() => navigation.navigate("Create")}
      />
    ),
    [logout]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderHeaderRight,
      headerRightContainerStyle: {
        marginRight: 24
      }
    });
  }, [navigation]);

  useRefetchOnFocus(refetch, false, true);

  return {
    data,
    error,
    isLoading,
    isLogoutModalOpen,
    logout,
    renderFlatlistItem,
    toggleLogoutModal
  };
};
