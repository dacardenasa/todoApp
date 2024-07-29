export type TaskMapped = {
  content: string;
  date: Date;
  title: string;
  isActive: boolean;
  id: string;
};

export type Task = {
  _id: string;
  content: string;
  date: Date;
  isActive: boolean;
  title: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type TasksResponse = Task[];

export type TaskCardProp = Omit<TaskMapped, "isActive">;
