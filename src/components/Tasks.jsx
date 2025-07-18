import NewTask from "./NewTask";

export default function Tasks({tasks, onAdd, onDelete}){
    return (
        <section>
            <h2 className="text-2xl text-stone-700 mb-4">Tasks</h2>
            <NewTask add={onAdd} />
            { tasks.length === 0 && (
                <p className="text-stone-800 my-4">This project doesn't have tasks yet.</p>
            )}
           {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((item) => {
                        <li key={item.id} className="flex justify-between my-4">
                            <span>{item.text}</span>
                            <button 
                                className="text-stone-700 hover:text-red-500"
                                onClick={() => onDelete(tasks.id)}
                            >
                                Clear</button>
                        </li>
                    })}
                </ul>
            )}
        </section>
    )
}