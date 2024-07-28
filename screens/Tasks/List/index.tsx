import React from "react";
import { StyleSheet } from "react-native";

import { FlashList } from "@shopify/flash-list";

import {
  Box,
  Button,
  CustomModal,
  ErrorView,
  ListEmptyComponent,
  Separator,
  Typography
} from "@/components";

import { useList } from "./useList";
import { TaskCardGroup } from "./components/TaskCardGroup";

export const List = () => {
  const {
    data,
    error,
    isLoading,
    isLogoutModalOpen,
    logout,
    renderFlatlistItem,
    toggleLogoutModal
  } = useList();

  if (error) {
    return <ErrorView message={error.message} />;
  }

  return (
    <Box style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderFlatlistItem}
        ItemSeparatorComponent={() => <Separator height={16} />}
        ListEmptyComponent={
          isLoading ? null : (
            <ListEmptyComponent message="You have no tasks registered" />
          )
        }
        ListFooterComponent={
          isLoading ? <TaskCardGroup skeletonNumber={6} /> : null
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
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: "relative"
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
