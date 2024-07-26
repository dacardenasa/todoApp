import { User, UserState } from "../provider";

export type UserActions =
  | { type: "login"; payload: User }
  | { type: "logout"; };

export const userReducer = (state: UserState, action: UserActions) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isLoading: false };
    case "logout":
      return { ...state, user: null };
    default:
      throw new Error("Invalid action type");
  }
};
