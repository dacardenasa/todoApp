import React from "react";
import { StyleSheet } from "react-native";

import { Container, Typography } from "@/components";

export const Create = () => {
  return (
    <Container style={styles.container}>
      <Typography type="title">Create</Typography>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
