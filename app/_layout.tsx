import 'react-native-gesture-handler';
import "react-native-reanimated";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';
import { PublicStackNavigator } from '@/navigation/PublicNavigation';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <PublicStackNavigator />
    </NavigationContainer>
  );
}
