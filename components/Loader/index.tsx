import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

import { Container } from "../Container";

const _Loader = () => {
  return (
    <Container style={styles.container}>
      <ActivityIndicator size="large" color={colors.middle} />
    </Container>
  );
};

export const Loader = React.memo(_Loader);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AF47D2",
  },
});
