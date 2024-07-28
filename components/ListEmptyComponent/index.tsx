import React from "react";
import { Box } from "../Box";
import { Typography } from "../Typography";
import { StyleSheet } from "react-native";

type ListEmptyComponentProps = {
  message: string;
};

export const ListEmptyComponent = ({ message }: ListEmptyComponentProps) => {
  return (
    <Box style={styles.container}>
      <Typography type="subtitle">{message}</Typography>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});
