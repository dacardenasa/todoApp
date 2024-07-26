import { PublicStackNavigatorProps } from "@/navigation/PublicNavigation";
import { PrivateStackNavigatorProps } from "@/navigation/PrivateNavigation";
import { StackScreenProps } from "@react-navigation/stack";

export type LoginProps = StackScreenProps<PublicStackNavigatorProps, "Login">;
export type RegisterProps = StackScreenProps<
  PublicStackNavigatorProps,
  "Register"
>;
export type ListTasksProps = StackScreenProps<
  PrivateStackNavigatorProps,
  "List"
>;
export type createTaskProps = StackScreenProps<
  PrivateStackNavigatorProps,
  "Create"
>;
export type detailsTaskProps = StackScreenProps<
  PrivateStackNavigatorProps,
  "Detail"
>;
