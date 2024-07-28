export type TaskResponse = {
  content: string;
  date: Date;
  isActive: boolean;
  title: string;
  user: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type Task = {
  title: string;
  content: string;
  date: Date;
};
