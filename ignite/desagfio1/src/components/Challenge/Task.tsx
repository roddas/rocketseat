import { useState } from 'react';
import deleteNoHover from './assets/img/no_hover.svg';
import deleteHover from './assets/img/hover.svg';
import checkedDefault from './assets/img/checked.svg';
import checkedHover from './assets/img/checked_hover.svg';
import uncheckedDefault from './assets/img/unchecked.svg';
import uncheckedHover from './assets/img/unchecked_hover.svg';
import { TaskDataType } from './TaskDataType';

export const Task = (taskParam: TaskDataType) => {

    const { taskList } = taskParam;
    const [textClassName, setTextClassName] = useState('text-sm text-white p-2');

    function mouseEnterEvent(id: string, type: "check" | "recycle"): void {
        if (document) {
            const imageElement = document.getElementById(id) as HTMLImageElement;

            if (imageElement) {
                imageElement.src = type === 'check' ? uncheckedHover : deleteHover;
            }
        }
    }

    function mouseLeaveEvent(id: string, type: "check" | "recycle"): void {
        if (document) {
            const imageElement = document.getElementById(id) as HTMLImageElement;

            if (imageElement) {
                imageElement.src = type === 'check' ? uncheckedDefault : deleteNoHover;
            }
        }
    }

    function markListEvent(id: string): void {
        if (document) {
            const imageElement = document.getElementById(id) as HTMLImageElement;

            if (imageElement) {
                imageElement.src = checkedDefault;
            }
        }
    }

    return (
        <>
            {
                taskList.map(({ isDone, task }, index) => {
                    const checkId = `check${index}`;
                    const deleteId = `delete${index}`;

                    return (
                        <div className="flex justify-between mb-2 rounded-md bg-[#333333] p-2  border-[1px] border-solid  border-gray-500" key={index}>
                            <img id={checkId} onMouseLeave={() => { mouseLeaveEvent(checkId, 'check') }} onMouseEnter={() => { mouseEnterEvent(checkId, 'check') }} src={uncheckedDefault} alt="" />
                            <span className={textClassName}>{task}</span>
                            <img id={deleteId} onMouseLeave={() => { mouseLeaveEvent(deleteId, 'recycle') }} onMouseEnter={() => { mouseEnterEvent(deleteId, 'recycle') }} src={deleteNoHover} alt="" />
                        </div>
                    )
                })
            }

        </>


    );
};