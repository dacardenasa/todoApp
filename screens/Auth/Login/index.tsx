import React from "react";
import { StyleSheet } from "react-native";

import {
  Box,
  Button,
  Container,
  TextButton,
  TextField,
  Typography
} from "@/components";

import { useLogin } from "./useLogin";

export const Login = () => {
  const {
    isPending,
    password,
    shouldDisabledLoginButton,
    username,
    goToRegister,
    handleChangeField,
    handlelogin
  } = useLogin();

  return (
    <Container style={styles.container}>
      <Box style={styles.formBox}>
        <Typography type="title" style={styles.titleLabel}>
          Welcome to {""}
          <Typography type="title" style={styles.altLabel}>
            TODO APP
          </Typography>
        </Typography>
        <TextField
          value={username}
          placeholder="Username"
          onChangeText={(value) => handleChangeField("username", value)}
        />
        <TextField
          value={password}
          placeholder="Password"
          onChangeText={(value) => handleChangeField("password", value)}
          secureTextEntry
        />
        <Button
          label="Login"
          isDisabled={shouldDisabledLoginButton || isPending}
          handleOnPress={handlelogin}
        />
        <TextButton
          isDisabled={isPending}
          label="don't you have an account?"
          handleOnPress={goToRegister}
        />
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AF47D2"
  },
  formBox: {
    width: "100%",
    rowGap: 16
  },
  titleLabel: {
    color: "white",
    textAlign: "center"
  },
  altLabel: {
    color: "#26355D"
  }
});
