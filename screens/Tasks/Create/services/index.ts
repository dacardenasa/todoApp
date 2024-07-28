import axios from "axios";

import { ApiController } from "@/api/apiController";
import { Task, TaskResponse } from "../../models";

export const TaskService = {
  create: async (payload: Task): Promise<TaskResponse> => {
    const apiController = new ApiController(axios);
    const { data }: { data: TaskResponse } = await apiController.post(
      "/tasks/create",
      payload
    );
    return data;
  }
};
