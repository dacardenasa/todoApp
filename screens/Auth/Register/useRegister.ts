import { useContext, useMemo } from "react";
import { useNavigation } from "expo-router";
import { useMutation } from "@tanstack/react-query";

import Toast from "react-native-toast-message";

import { useForm } from "@/hooks";
import { UserContext } from "@/state";
import { RegisterProps } from "@/interfaces";

import { UserCredentials } from "../models";
import { AuthService } from "../Login/services";
import { UserService } from "./services";

export const useRegister = () => {
  const navigation = useNavigation<RegisterProps["navigation"]>();
  const { login: loginDispatch } = useContext(UserContext);
  const { form, handleChangeField } = useForm<UserCredentials>({
    username: "",
    password: ""
  });

  const shouldDisabledLoginButton = useMemo(
    () => Object.values(form).some((value) => !value.length),
    [form]
  );

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

  const { isPending: isPendingRegisterUser, mutate: registerUser } =
    useMutation({
      mutationFn: (payload: UserCredentials) => UserService.register(payload),
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: error.message
        });
      },
      onSuccess: async (_, variables) => {
        login(variables);
      }
    });

  const handleRegisterUser = () => {
    registerUser(form);
  };

  const goToLogin = () => navigation.navigate("Login");

  return {
    ...form,
    isPending,
    isPendingRegisterUser,
    shouldDisabledLoginButton,
    goToLogin,
    handleChangeField,
    handleRegisterUser
  };
};
