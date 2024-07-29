import { createContext } from "react";
import { User } from "../provider";

export type UserContextProps = {
  user: User | null;
  isLoading: boolean;
  login: (payload: User) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);
