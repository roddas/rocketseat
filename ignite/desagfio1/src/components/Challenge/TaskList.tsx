import { Task } from "./Task";
import { TaskDataType } from './TaskDataType';

const data = {
    taskList: [
        {
            isDone: false,
            task: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
        {
            isDone: false,
            task: 'Repudiandae veniam voluptatibus praesentium dolore quaerat minus sint rem minima iste eum cum animi.'
        },
        {
            isDone: false,
            task: 'Laboriosam numquam voluptate obcaecati exercitationem inventore quia! Modi?'
        },
        {
            isDone: false,
            task: 'Repudiandae veniam voluptatibus praesentium dolore quaerat minus sint rem minima iste eum cum animi.'
        }
    ]
} as TaskDataType;

export const TaskList = () => {
    return (
        <div className="my-4">
            <Task {...data} />
        </div>
    );
};