import { FormEvent, useState } from 'react';
import logo from '../../assets/logo.png';
import { NoContent } from './NoContent';
import { ITask } from './TaskDataType';
import { Task } from './Task';

export const Challenge = () => {
    const [tasks, setNewTask] = useState<ITask[]>([]);
    const [taskCounter, setTaskCounter] = useState<number>(0);

    function addNewTask(event: FormEvent) {

        const textInput = document.getElementById('task') as HTMLInputElement;
        event.preventDefault();
        setTaskCounter(taskCounter + 1);

        const newTask = {
            id: taskCounter,
            task: textInput.value,
            isDone: false
        } as ITask;

        textInput.value = '';
        setNewTask([...tasks, newTask]);
    }

    return (
        <>
            <nav className="p-8 bg-[#0D0D0D] flex justify-center" >
                <img className="" src={logo} width={125} height={70} alt="logo" />
            </nav>
            <div className="bg-[#1a1a1a] py-8  font-[Inter] h-[80vh]">
                <section className="flex justify-center">
                    <form className="w-[50%] " method='post' action='#' onSubmit={(event: FormEvent) => { addNewTask(event) }}>
                        <input type="text" name="task" id="task" placeholder="Adicione uma tarefa" className='p-3 w-[85%] mr-[2%] border-none bg-[#262626] rounded-md text-white' />
                        <input type="button" onClick={addNewTask} value="Criar" className="py-2  w-[13%] bg-[#1E6F9f] hover:bg-[#4ea8de] text-white rounded-md" />
                    </form>
                </section>
                <section className="mx-auto w-[50%] mt-8">
                    <div className="flex justify-between">
                        <aside className="font-bold">
                            <p className='text-[#1E6F9f] '>Tarefas criadas <span className='text-white rounded-full bg-[#808080] p-1'>0</span></p>
                        </aside>
                        <aside className="font-bold">
                            <p className='text-[#8284FA]'>Concluídas <span className='text-white rounded-full bg-[#808080] p-1' >0</span></p>
                        </aside>
                    </div>
                    {
                        tasks.length === 0 && <NoContent />
                    }
                    <div className="my-4">
                        {
                            tasks.map((value, index) => (
                                <div className="flex justify-between mb-2 rounded-md bg-[#333333] p-2  border-[1px] border-solid  border-gray-500" key={index} >
                                    <Task {...value} />
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    );
}