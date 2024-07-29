import { TaskMapped, TasksResponse } from "../models";

export const apiToTask = (tasks: TasksResponse): TaskMapped[] => {
  if (!tasks.length) return [];
  return tasks.map(({ content, date, title, isActive, _id }) => {
    return {
      content,
      date,
      title,
      isActive,
      id: _id,
    };
  });
};
