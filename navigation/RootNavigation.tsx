import { useCallback, useContext, useEffect, useState } from "react";
import { AppStateStatus } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from "@/state";
import { Loader } from "@/components";
import { useAppStateCheck } from "@/hooks";

import { PrivateStackNavigator } from "./PrivateNavigation";
import { PublicStackNavigator } from "./PublicNavigation";

const Stack = createStackNavigator();

export function RootStackNavigator() {
  const { user, isLoading, login, logout } = useContext(UserContext);
  const [appStateStatus, setAppStateStatus] =
    useState<AppStateStatus>("active");
  useAppStateCheck({ setAppStateStatus });

  const onAppStateChange = useCallback(async () => {
    switch (appStateStatus) {
      case "active":
        const user = await AsyncStorage.getItem("user");
        if (user) {
          const parsedUser = JSON.parse(user);
          login(parsedUser);
          return;
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
  }, [appStateStatus, login, logout]);

  useEffect(() => {
    onAppStateChange();
  }, [onAppStateChange]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen
          name="Private"
          component={PrivateStackNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Public"
          component={PublicStackNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
