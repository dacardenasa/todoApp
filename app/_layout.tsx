import "react-native-gesture-handler";
import "react-native-reanimated";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

import { Loader } from "@/components";
import { UserProvider } from "@/state";
import { RootStackNavigator } from "@/navigation/RootNavigation";
import { useEffect } from "react";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <NavigationContainer independent={true}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <RootStackNavigator />
          <Toast />
        </UserProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
