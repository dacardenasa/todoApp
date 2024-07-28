import { formatDate } from "@/utils";
import { TaskMapped, TasksResponse } from "../models";

export const apiToTask = (tasks: TasksResponse): TaskMapped[] => {
  if (!tasks.length) return [];
  return tasks.map(({ content, date, title, isActive, _id }) => {
    const currentDate = formatDate(date);
    return {
      content,
      date: currentDate,
      title,
      isActive,
      id: _id
    };
  });
};
