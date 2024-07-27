import axios from "axios";

import { ApiController } from "@/api/apiController";
import { UserCredentials } from "@/screens/Auth/models";

import { UserRegisterResponse } from "../models";


export const UserService = {
  register: async (payload: UserCredentials): Promise<UserRegisterResponse> => {
    const apiController = new ApiController(axios);
    const { data } = await apiController.post("/users/register", payload);
    return data;
  }
};
