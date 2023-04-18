export interface ITask {
  task: string;
  id: string | number;
  isDone: boolean;
  onDeleteTask: (id: string | number) => void;
}

export type TaskDataType = {
  taskList: ITask[];
};
