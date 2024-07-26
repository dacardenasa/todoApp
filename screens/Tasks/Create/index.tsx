import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Button, Container, Typography } from "@/components";
import { UserContext } from "@/state";

export const Create = () => {
  const { logout } = useContext(UserContext);
  return (
    <Container style={styles.container}>
      <Button label="logout" handleOnPress={logout} />
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
