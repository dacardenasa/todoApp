import React, { useCallback, useContext, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import {
  Box,
  Button,
  Container,
  TextButton,
  TextField,
  Typography
} from "@/components";
import { LoginProps } from "@/interfaces";
import Toast from "react-native-toast-message";
import { useMutation } from "@tanstack/react-query";
import { UserCredentials } from "./models/index";
import { AuthService } from "./services";
import { UserContext } from "@/state";

export const Login = ({ navigation }: LoginProps) => {
  const { login: loginDispatch, user } = useContext(UserContext);
  const [form, setForm] = useState<UserCredentials>({
    username: "",
    password: ""
  });

  const shouldDisabledLoginButton = useMemo(
    () => Object.values(form).some((value) => !value.length),
    [form]
  );

  const handleChangeField = (field: keyof UserCredentials, value: string) => {
    setForm((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const handlelogin = useCallback(() => {
    login({ username: form.username, password: form.password });
  }, [form]);

  const { isPending, mutate: login } = useMutation({
    mutationFn: (payload: UserCredentials) => AuthService.login(payload),
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: error.message
      });
    },
    onSuccess: async ({ user, token }) => {
      Toast.show({
        type: "success",
        text1: `Welcome ${user.username}`
      });
      loginDispatch({ ...user, token });
    }
  });

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
          value={form.username}
          placeholder="Type your username"
          onChangeText={(value) => handleChangeField("username", value)}
        />
        <TextField
          value={form.password}
          placeholder="Type your password"
          onChangeText={(value) => handleChangeField("password", value)}
          secureTextEntry
        />
        <Button
          label="Login"
          isDisabled={shouldDisabledLoginButton || isPending}
          handleOnPress={handlelogin}
        />
        <TextButton
          label="don't you have an account?"
          handleOnPress={() => navigation.navigate("Register")}
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
