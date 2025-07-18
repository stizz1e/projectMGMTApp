import { useState } from "react";

export default function NewTask({add}){
    const [enteredTask, setEnteredTask] = useState('');
    const handleChange = (e) => {
        setEnteredTask(e.target.value);
    }

    const handleClick = () => {
        add(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input 
                onChange={handleChange} 
                value={enteredTask} 
                type="text" 
                className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
            />
            <button 
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    )
}