import emptyImage from './empty.svg';

export const NoContent = () => (
    <div className="mx-auto">
        <hr className="bg-[#262626] border-[#262626] my-8" />
        <div className="flex justify-center" >
            <img src={emptyImage} alt="Empty image icon" />
        </div>
        <div className="text-[#D9D9D9] mt-8">
            <section className='flex justify-center'>
                <p className="font-bold">Você ainda ñ tem tarefas cadastradas</p>
            </section>
            <section className='flex justify-center'>
                <p className="font-bnormal">Crie tarefas e organize seus itens a fazer</p>
            </section>
        </div>
    </div>
);