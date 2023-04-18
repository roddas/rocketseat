export interface ITask {
  task: string;
  id: string | number;
  isDone: boolean;
}

export type TaskDataType = {
  taskList: ITask[];
};
