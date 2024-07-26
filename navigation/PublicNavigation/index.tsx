import { Login, Register } from "@/screens/Auth";
import { createStackNavigator } from "@react-navigation/stack";

export type PublicStackNavigatorProps = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<PublicStackNavigatorProps>();

export function PublicStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
