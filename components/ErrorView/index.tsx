import React from "react";
import { StyleSheet } from "react-native";
import { Container } from "../Container";
import { Typography } from "../Typography";

type ErrorViewProps = {
  message: string;
};

export const ErrorView = ({ message }: ErrorViewProps) => {
  return (
    <Container style={styles.container}>
      <Typography type="title" style={{ color: "red" }}>
        {message}
      </Typography>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: 8,
    justifyContent: "center",
    alignItems: "center"
  }
});
