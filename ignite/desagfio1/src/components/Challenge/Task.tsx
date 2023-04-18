import { useState } from 'react';
import deleteNoHover from './assets/img/no_hover.svg';
import deleteHover from './assets/img/hover.svg';
import checkedDefault from './assets/img/checked.svg';
import checkedHover from './assets/img/checked_hover.svg';
import uncheckedDefault from './assets/img/unchecked.svg';
import uncheckedHover from './assets/img/unchecked_hover.svg';
import { ITask } from './TaskDataType';

export const Task = (taskParam: ITask) => {

    const { isDone, task, id, onDeleteTask } = taskParam;
    const [taskDone, setTaskDone] = useState<boolean>(isDone);
    const [textClassName, setTextClassName] = useState('text-sm text-white p-2');
    const checkId = `check${id}`;
    const deleteId = `delete${id}`;

    function mouseEnterEvent(id: string, type: "check" | "recycle", taskDone: boolean): void {
        if (document) {
            const imageElement = document.getElementById(id) as HTMLImageElement;

            if (imageElement) {
                if (taskDone) {
                    imageElement.src = type === 'check' ? checkedHover : deleteHover;
                } else {
                    imageElement.src = type === 'check' ? uncheckedHover : deleteHover;
                }
            }
        }
    }

    function mouseLeaveEvent(id: string, type: "check" | "recycle", taskDone: boolean): void {
        if (document) {
            const imageElement = document.getElementById(id) as HTMLImageElement;

            if (imageElement) {
                if (taskDone) {
                    imageElement.src = type === 'check' ? checkedDefault : deleteNoHover;
                } else {
                    imageElement.src = type === 'check' ? uncheckedDefault : deleteNoHover;
                }
            }
        }
    }
    function markTaskDone(id: string | number): void {
        let element = document.getElementById(checkId) as HTMLImageElement;
        setTextClassName(!taskDone ? 'text-sm text-white p-2 line-through' : 'text-sm text-white p-2');
        setTaskDone(!taskDone);
        element.src = checkedDefault;
    }
    return (
        <>
            <img id={checkId} onClick={() => { markTaskDone(id) }} onMouseLeave={() => { mouseLeaveEvent(checkId, 'check', taskDone) }} onMouseEnter={() => { mouseEnterEvent(checkId, 'check', taskDone) }} src={uncheckedDefault} alt="" />
            <span className={textClassName}>{task}</span>
            <img id={deleteId} onClick={() => { onDeleteTask(id) }} onMouseLeave={() => { mouseLeaveEvent(deleteId, 'recycle', taskDone) }} onMouseEnter={() => { mouseEnterEvent(deleteId, 'recycle', taskDone) }} src={deleteNoHover} alt="" />
        </>
    );
};