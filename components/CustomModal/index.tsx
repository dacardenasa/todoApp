import React from "react";
import { Modal, Pressable, StyleSheet } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Box } from "../Box";

type CustomModalProps = {
  closeModal: () => void;
  isModalOpen: boolean;
  showCloseButton?: boolean;
  children: React.ReactNode;
};

const _CustomModal = ({
  children,
  isModalOpen,
  closeModal,
  showCloseButton = false,
}: CustomModalProps) => {
  return (
    <Modal
      animationType="fade"
      onRequestClose={closeModal}
      style={StyleSheet.absoluteFillObject}
      visible={isModalOpen}
      transparent
    >
      {showCloseButton && (
        <Pressable style={styles.closeButtonBox} onPress={closeModal}>
          <MaterialIcons name="close" color="#fff" size={36} />
        </Pressable>
      )}
      <Box style={styles.backdropBox}>{children}</Box>
    </Modal>
  );
};

export const CustomModal = React.memo(_CustomModal);

const styles = StyleSheet.create({
  closeButtonBox: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 100,
  },
  backdropBox: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .8)",
  },
});
