import { ReactNode } from "react";

export default interface ITaskList {
  taskTitle: string;
  taskDate: string;
  taskStatus: string;
  taskStatusIcon: ReactNode;
}

export interface ITask {
  title: string;
  content: string;
}

export interface ITaskContext {
  addTask: () => Promise<void>;
  editTask: () => Promise<void>;
  deleteTask: () => Promise<void>;
}
