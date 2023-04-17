interface ITask {
  task: string;
  isDone: boolean;
}

export type TaskDataType = {
  taskList: ITask[];
};
