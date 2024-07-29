import axios from "axios";

import { ApiController } from "@/api/apiController";
import { TasksResponse } from "../models";

export const TaskService = {
  getAll: async (): Promise<TasksResponse> => {
    const apiController = new ApiController(axios);
    const { data }: { data: TasksResponse } = await apiController.get("/tasks");
    return data;
  },
};
