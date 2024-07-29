import axios from "axios";

import { ApiController } from "@/api/apiController";
import { TaskResponse } from "@/screens/Tasks/models";
import { TaskPayload } from "../models";

export const TaskService = {
  update: async (payload: TaskPayload): Promise<TaskResponse> => {
    const { id, ...task } = payload;
    const apiController = new ApiController(axios);
    const { data }: { data: TaskResponse } = await apiController.put(
      `/tasks/${id}`,
      task,
    );
    return data;
  },
  delete: async (id: string): Promise<TaskResponse> => {
    const apiController = new ApiController(axios);
    const { data }: { data: TaskResponse } = await apiController.delete(
      `/tasks/${id}`,
    );
    return data;
  },
};
