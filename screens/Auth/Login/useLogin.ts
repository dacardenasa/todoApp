import { useCallback, useContext, useMemo } from "react";
import { useNavigation } from "expo-router";

import Toast from "react-native-toast-message";

import { useForm } from "@/hooks";
import { UserContext } from "@/state";
import { useMutation } from "@tanstack/react-query";
import { LoginProps } from "@/interfaces";

import { AuthService } from "./services";
import { UserCredentials } from "../models";

export const useLogin = () => {
  const navigation = useNavigation<LoginProps["navigation"]>();
  const { login: loginDispatch } = useContext(UserContext);
  const { form, handleChangeField } = useForm<UserCredentials>({
    username: "",
    password: "",
  });

  const shouldDisabledLoginButton = useMemo(
    () => Object.values(form).some((value) => !value.length),
    [form],
  );

  const goToRegister = () => navigation.navigate("Register");

  const { isPending, mutate: login } = useMutation({
    mutationFn: (payload: UserCredentials) => AuthService.login(payload),
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: error.message,
      });
    },
    onSuccess: async ({ user, token }) => {
      Toast.show({
        type: "success",
        text1: `Welcome ${user.username}`,
      });
      loginDispatch({ ...user, token });
    },
  });

  const handlelogin = useCallback(() => {
    login(form);
  }, [form, login]);

  return {
    ...form,
    isPending,
    shouldDisabledLoginButton,
    goToRegister,
    handleChangeField,
    handlelogin,
  };
};
