import { Create, Detail, List } from "@/screens/Tasks";
import { createStackNavigator } from "@react-navigation/stack";

export type PrivateStackNavigatorProps = {
  Create: undefined;
  Detail: {
    id: string;
    content: string;
    title: string;
    date: Date;
  };
  List: undefined;
};

const Stack = createStackNavigator<PrivateStackNavigatorProps>();

export function PrivateStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={List}
        options={{ title: "TODO list" }}
      />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
