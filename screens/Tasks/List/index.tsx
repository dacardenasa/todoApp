import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState
} from "react";
import { Pressable, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useQuery } from "@tanstack/react-query";
import { FlashList } from "@shopify/flash-list";

import {
  Box,
  Button,
  Container,
  CustomModal,
  ErrorView,
  ListEmptyComponent,
  Loader,
  Separator,
  Typography
} from "@/components";

import { TaskService } from "./services";
import { apiToTask } from "./adapters/apiToTask";
import { TaskMapped } from "./models";
import { TaskCard } from "./components/TaskCard";
import { ListTasksProps } from "@/interfaces";
import { colors } from "@/constants/colors";
import { UserContext } from "@/state";

export const List = ({ navigation }: ListTasksProps) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { logout } = useContext(UserContext);
  const { isLoading, data, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: TaskService.getAll,
    select: (tasks) => {
      const tasksMapped = apiToTask(tasks);
      return tasksMapped;
    }
  });

  const toggleLogoutModal = () => setIsLogoutModalOpen((prev) => !prev);

  const renderFlatlistItem = ({ item }: { item: TaskMapped }) => {
    return <TaskCard {...item} />;
  };

  const renderHeaderRight = useCallback(
    () => (
      <Pressable onPress={toggleLogoutModal}>
        <FontAwesome name="power-off" size={32} color={colors.low} />
      </Pressable>
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

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView message={error.message} />;
  }

  return (
    <Container style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderFlatlistItem}
        ItemSeparatorComponent={() => <Separator height={16} />}
        ListEmptyComponent={
          <ListEmptyComponent message="You have no tasks registered" />
        }
        estimatedItemSize={20}
        keyExtractor={(item) => item.id}
      />
      <CustomModal
        isModalOpen={isLogoutModalOpen}
        closeModal={toggleLogoutModal}
      >
        <Box style={styles.modalContentBox}>
          <Typography type="subtitle">Logout</Typography>
          <Box style={styles.modalButtonsBox}>
            <Button
              label="Confirm"
              handleOnPress={logout}
              style={{ width: "48%" }}
            />
            <Button
              label="Cancel"
              handleOnPress={toggleLogoutModal}
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
    paddingHorizontal: 16
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
    justifyContent: "space-between",
  }
});
