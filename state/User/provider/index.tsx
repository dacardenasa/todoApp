import { useCallback, useEffect, useReducer, useState } from "react";
import { UserContext } from "../context";
import { userReducer } from "../reducer";

import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const login = async (payload: User) => {
    await AsyncStorage.setItem("user", JSON.stringify(payload));
    dispatch({ type: "login", payload });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    dispatch({ type: "logout" });
  };

  return (
    <UserContext.Provider
      value={{ user: state.user, isLoading: state.isLoading, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
