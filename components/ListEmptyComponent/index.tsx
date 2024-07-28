import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "../Box";
import { Typography } from "../Typography";

type ListEmptyComponentProps = {
  message: string;
};

const _ListEmptyComponent = ({ message }: ListEmptyComponentProps) => {
  return (
    <Box style={styles.container}>
      <Typography type="subtitle">{message}</Typography>
    </Box>
  );
};

export const ListEmptyComponent = React.memo(_ListEmptyComponent);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});
