import axios from "axios";

import { ApiController } from "@/api/apiController";

import {
  UserCredentials,
  UserLoginResponse,
  UserRegisterResponse
} from "../models";

export const AuthService = {
  login: async (payload: UserCredentials): Promise<UserLoginResponse> => {
    const apiController = new ApiController(axios);
    const { data } = await apiController.post("/auth/login", payload);
    return data;
  },
  register: async (payload: UserCredentials): Promise<UserRegisterResponse> => {
    const apiController = new ApiController(axios);
    const { data } = await apiController.post("/users/register", payload);
    return data;
  }
};
