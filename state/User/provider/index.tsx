import { useCallback, useEffect, useReducer, useState } from "react";
import { UserContext } from "../context";
import { userReducer } from "../reducer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import useAppStateCheck from "@/hooks/useAppStateCheck";
import { AppStateStatus } from "react-native";

export type User = {
  username: string;
  uid: string;
  token: string;
};

export type UserState = {
  user: User | null;
  isLoading: boolean;
};

export const initialState: UserState = {
  user: null,
  isLoading: true
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [appStateStatus, setAppStateStatus] =
    useState<AppStateStatus>("active");
  useAppStateCheck({ setAppStateStatus });

  const login = async (payload: User) => {
    await AsyncStorage.setItem("user", JSON.stringify(payload));
    dispatch({ type: "login", payload });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    dispatch({ type: "logout" });
  };

  const onAppStateChange = useCallback(async () => {
    switch (appStateStatus) {
      case "active":
        const user = await AsyncStorage.getItem("user");
        if (user) {
          const parsedUser = JSON.parse(user);
          login(parsedUser);
          return
        }
        logout();
        break;
      case "background":
        console.info("Background state");
        break;
      case "inactive":
        console.info("Inactive state");
        break;
      default:
        console.info("Unknown state");
        break;
    }
  }, [appStateStatus]);

  useEffect(() => {
    onAppStateChange();
  }, [onAppStateChange]);

  return (
    <UserContext.Provider
      value={{ user: state.user, isLoading: state.isLoading, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
