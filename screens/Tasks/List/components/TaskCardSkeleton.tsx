import { Box, Typography } from "@/components";
import React from "react";
import { StyleSheet } from "react-native";

export const TaskCardSkeleton = () => {
  return (
    <Box style={styles.container}>
      <Box style={styles.labelTitleBox} />
      <Box style={styles.labelSubtitleBox} />
      <Box style={styles.labeDescBox} />
      <Box style={styles.labelSubtitleBox} />
      <Box style={styles.labeDateBox} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    borderRadius: 16,
    backgroundColor: "#ccc",
    padding: 16,
  },
  labelTitleBox: {
    width: "80%",
    height: 30,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 8
  },
  labelSubtitleBox: {
    width: "30%",
    height: 20,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 8
  },
  labeDescBox: {
    width: "100%",
    height: 10,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 8
  },
  labeDateBox: {
    width: "20%",
    height: 10,
    backgroundColor: "white",
    borderRadius: 8,
  }
});
