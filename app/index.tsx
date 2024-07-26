import { Box, Container, Typography } from "@/components";
import React from "react";

import { StyleSheet } from "react-native";

export const Home = () => {
  return (
    <Container style={styles.container}>
      <Typography type="title">Home</Typography>
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
