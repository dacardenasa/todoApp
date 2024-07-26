import { Create, Detail, List } from "@/screens/Tasks";
import { createStackNavigator } from "@react-navigation/stack";

export type PrivateStackNavigatorProps = {
  Create: undefined;
  Detail: {
    id: string;
  };
  List: undefined;
};

const Stack = createStackNavigator<PrivateStackNavigatorProps>();

export function PrivateStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}
