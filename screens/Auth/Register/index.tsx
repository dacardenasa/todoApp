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
import { useRegister } from "./useRegister";

export const Register = () => {
  const {
    password,
    username,
    isPending,
    isPendingRegisterUser,
    shouldDisabledLoginButton,
    goToLogin,
    handleChangeField,
    handleRegisterUser
  } = useRegister();

  return (
    <Container style={styles.container}>
      <Box style={styles.formBox}>
        <Typography type="title" style={styles.titleLabel}>
          Register Form
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
          isDisabled={
            shouldDisabledLoginButton || isPending || isPendingRegisterUser
          }
          label="Create account"
          handleOnPress={handleRegisterUser}
        />
        <TextButton
          isDisabled={isPending || isPendingRegisterUser}
          label="back to Login"
          handleOnPress={goToLogin}
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
  }
});
