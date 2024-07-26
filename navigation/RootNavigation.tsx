import { UserContext } from "@/state";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import { PrivateStackNavigator } from "./PrivateNavigation";
import { PublicStackNavigator } from "./PublicNavigation";
import { Loader } from "@/components";

const Stack = createStackNavigator();

export function RootStackNavigator() {
  const { user, isLoading } = useContext(UserContext);

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
