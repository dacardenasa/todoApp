import axios from "axios";

import { ApiController } from "@/api/apiController";
import { UserCredentials } from "@/screens/Auth/models";

import { UserLoginResponse } from "../models";

export const AuthService = {
  login: async (payload: UserCredentials): Promise<UserLoginResponse> => {
    const apiController = new ApiController(axios);
    const { data } = await apiController.post("/auth/login", payload);
    return data;
  }
};
