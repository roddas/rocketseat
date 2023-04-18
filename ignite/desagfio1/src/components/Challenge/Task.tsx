import { useState } from 'react';
import deleteNoHover from './assets/img/no_hover.svg';
import deleteHover from './assets/img/hover.svg';
import checkedDefault from './assets/img/checked.svg';
import checkedHover from './assets/img/checked_hover.svg';
import uncheckedDefault from './assets/img/unchecked.svg';
import uncheckedHover from './assets/img/unchecked_hover.svg';
import { ITask } from './TaskDataType';

export const Task = (taskParam: ITask) => {

    const [textClassName, setTextClassName] = useState('text-sm text-white p-2');
    const { isDone, task, id } = taskParam;
    const checkId = `check${id}`;
    const deleteId = `delete${id}`;

    function mouseEnterEvent(id: string, type: "check" | "recycle", isDone: boolean): void {
        if (document) {
            const imageElement = document.getElementById(id) as HTMLImageElement;

            if (imageElement) {
                if (isDone) {
                    imageElement.src = type === 'check' ? checkedHover : deleteHover;
                } else {
                    imageElement.src = type === 'check' ? uncheckedHover : deleteHover;
                }
            }
        }
    }

    function mouseLeaveEvent(id: string, type: "check" | "recycle", isDone: boolean): void {
        if (document) {
            const imageElement = document.getElementById(id) as HTMLImageElement;

            if (imageElement) {
                if (isDone) {
                    imageElement.src = type === 'check' ? checkedDefault : deleteNoHover;
                } else {
                    imageElement.src = type === 'check' ? uncheckedDefault : deleteNoHover;
                }
            }
        }
    }

    function markListEvent(id: string, type: "check" | "recycle", isDone: boolean): void {
        if (document) {
            // const imageElement = document.getElementById(id) as HTMLImageElement;

            // if (imageElement) {
            //     imageElement.src = type === 'check' ? checkedDefault : deleteNoHover;
            //     isDone = true;
            // }
            alert('Feito');
        }
    }

    return (
        <>
            <img id={checkId} onClick={() => { markListEvent(checkId, "check", isDone) }} onMouseLeave={() => { mouseLeaveEvent(checkId, 'check', isDone) }} onMouseEnter={() => { mouseEnterEvent(checkId, 'check', isDone) }} src={uncheckedDefault} alt="" />
            <span className={textClassName}>{task}</span>
            <img id={deleteId} onMouseLeave={() => { mouseLeaveEvent(deleteId, 'recycle', isDone) }} onMouseEnter={() => { mouseEnterEvent(deleteId, 'recycle', isDone) }} src={deleteNoHover} alt="" />
        </>
    );
};