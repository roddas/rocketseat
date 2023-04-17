import logo from '../../assets/logo.png';
import { NoContent } from './NoContent';
import { TaskList } from './TaskList';

export const Challenge = () => {
    return (
        <>
            <nav className="p-8 bg-[#0D0D0D] flex justify-center" >
                <img className="" src={logo} width={125} height={70} alt="logo" />
            </nav>
            <div className="bg-[#1a1a1a] py-8  font-[Inter] h-[80vh]">
                <section className="flex justify-center">
                    <section className="w-[50%] ">
                        <input type="text" name="task" id="task" placeholder="Adicione uma tarefa" className='p-3 w-[85%] mr-[2%] border-none bg-[#262626] rounded-md text-white' />
                        <input type="button" value="Criar" className="py-2  w-[13%] bg-[#1E6F9f] hover:bg-[#4ea8de] text-white rounded-md" />
                    </section>
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
                    {/* <NoContent /> */}
                    <TaskList />
                </section>
            </div>
        </>
    );
}