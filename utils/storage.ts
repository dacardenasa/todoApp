import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getAuthToken() {
  const user = await AsyncStorage.getItem("user");
  if (user) {
    const parsedUser = JSON.parse(user);
    return parsedUser.token;
  }
  return null;
}
